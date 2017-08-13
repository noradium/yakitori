const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: './game/script/main.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['babel-loader', 'ts-loader'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          dead_code: true
        }
      }
    })
  ]
};
