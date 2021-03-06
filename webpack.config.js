'use strict';

var webpack = require('webpack'),
    path = require('path');

// PATHS
var PATHS = {
  app: __dirname + '/app',
  target: __dirname + '/test'
};

module.exports = {
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
          "react": __dirname + '/node_modules/react',
          "react/addons": __dirname + '/node_modules/react/addons',
      }
    },

    cache: true,
    debug: true,
    devtool: "#inline-source-map",

    entry: {
        app: [PATHS.app + '/index.js']
    },
    output: {
        path: PATHS.target,
        filename: 'main.js',
        publicPath: '/assets/'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.app
      }, {
        test: /\.sass$/,
        loader: 'style!copy' //the server will compile this for us!
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }, {
        test: /(\.(eot.*|woff.*|ttf.*|svg.*)$|.(gif)$)/,
        loader: "file"
      },  {
        test: /\.html$/,
        loader: "ngtemplate?relativeTo=" + __dirname + "!html"
      }]
    },

    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
