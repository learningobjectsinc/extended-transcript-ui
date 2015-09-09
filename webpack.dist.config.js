/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

// PATHS
var PATHS = {
  app: __dirname + '/app',
  target: __dirname + '/dist' //this might be able to be changed... have to check maven.
};

module.exports = {

  output: {
      path: PATHS.target + '/assets',
      filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './app/index.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

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
  }
};
