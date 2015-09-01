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
            pattern: new RegExp("\/assets\/main\.js"),
            replacement: '$$$url/assets/main.js'
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
        contentBase: './<%= pkg.src %>/',
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
        files: [
          // includes files within path
          // {
          //   flatten: true,
          //   expand: true,
          //   src: ['<%= pkg.src %>/*'],
          //   dest: '<%= pkg.dist %>/',
          //   filter: 'isFile'
          // }, {
          {
              src: '<%= pkg.src %>/index.html',
              dest: '<%= pkg.dist %>/index.html',

          },
          {
              src: '<%= pkg.src %>/car.json',
              dest: '<%= pkg.dist %>/car.json'
          }
        ],
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
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:dist', 'connect:dist']);
    }

    grunt.task.run([
      'open:dev',
      'webpack-dev-server'
    ]);
  });

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', ['clean', 'webpack', 'copy', 'string-replace', 'compress']);

  grunt.registerTask('default', []);
};
