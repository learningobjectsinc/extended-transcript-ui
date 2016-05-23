'use strict';

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var webpackDistConfig = require('./webpack.dist.config.js'),
    webpackDevConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  // Read configuration from package.json
  var pkgConfig = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkgConfig,

    webpack: {
      options: webpackDistConfig,

      dist: {
        cache: false
      }
    },

    'string-replace': {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: 'index.html',
          dest: 'dist/'
        }],
        options: {
          replacements: [{
            pattern: new RegExp(/\/assets\//g),
            replacement: '$$$url/assets/'
          },{
            pattern: new RegExp(/\/styles\/index.css/g),
            replacement: '/styles/index.sass'
          },{
            pattern: new RegExp(/\$ROOT_URL\$/g),
            replacement: '\'/\''
          },{
            pattern: new RegExp(/\$API_KEY\$/g),
            replacement: 'undefined'
          }]
        }
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: 'index.html',
          dest: '<%= pkg.dist %>'
        }],
        options: {
          replacements: [{
            pattern: new RegExp(/\$ROOT_URL\$/g),
            replacement: grunt.option('host') ? "\'" + grunt.option('host') + "\'" : '\'http://localhost:8080\''
          },{
            pattern: new RegExp(/\$API_KEY\$/g),
            replacement: grunt.option('apiKey') ? "\'" + grunt.option('apiKey') + "\'" : '\'secret\''
          }]
        }
      }
    },

    'webpack-dev-server': {
      options: {
        hot: true,
        port: 9000,
        webpack: webpackDevConfig,
        publicPath: '/assets/',
        contentBase: './<%= pkg.dist %>/',
        headers: {
          //"Content-Type":'text/css'
        }
      },

      start: {
        keepAlive: true,
      }
    },

    connect: {
      options: {
        port: 9000
      },

      dist: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              mountFolder(connect, pkgConfig.dist)
            ];
          }
        }
      }
    },

    open: {
      options: {
        delay: 500
      },
      dev: {
        path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/'
      },
      dist: {
        path: 'http://localhost:<%= connect.options.port %>/'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
      dist: {
        files: [{
          src: '<%= pkg.src %>/index.html',
          dest: '<%= pkg.dist %>/index.html',
        },{
          src: '<%= pkg.src %>/car.json',
          dest: '<%= pkg.dist %>/car.json'
        },{
          cwd: '<%= pkg.src %>',
          expand: true,
          src: ['**/*.scss', '**/*.sass', '!**/variables.scss'],
          dest: '<%= pkg.dist %>/assets/'
        }],
        options: {
          process: function(content, path) {
              return grunt.template.process(content, {data:{'prefix':'$$url'}});
          }
        }
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      },
      dev: {
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    },

    compress: {
      build: {
        options: {
          archive: '<%= pkg.name %>.zip'
        },
        files: [{
          src: ['**'],
          cwd:'dist/',
          dest: '/',
          filter: 'isFile',
          flatten:false,
          expand:true
        }]
      }
    },

    sass: {
      dev:{
        options: {
          sourceMap: true
        },
        files: {
          '<%= pkg.dist %>/assets/styles/index.css': '<%= pkg.src %>/styles/index.sass'
        }
      }
    },

    watch: {
      scripts: {
        files: ['<%= pkg.src %>/**/*.scss', '<%= pkg.src %>/**/*.sass'],
        tasks: ['sass:dev'],
        options: {
          spawn: true,
        }
      },
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        tasks: ['watch', 'webpack-dev-server']
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist']);
    }

    grunt.task.run([
      'clean:dev',
      'string-replace:dev',
      'sass:dev',
      'concurrent:dev'
    ]);
  });

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', ['clean', 'webpack', 'copy', 'string-replace:dist', 'compress']);

  grunt.registerTask('default', []);
};
