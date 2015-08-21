'use strict';

var webpack = require('webpack'),
    path = require('path');

// PATHS
var PATHS = {
  app: __dirname + '/app',
  target: __dirname + '/dist' //this might be able to be changed... have to check maven.
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
    devtool: false,

    entry: {
        app: [PATHS.app + '/index.js']
    },
    output: {
        path: PATHS.target,
        filename: 'bundle.js'
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
