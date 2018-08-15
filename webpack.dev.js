// Libraries
const merge = require('webpack-merge');
const Path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

// Config
const template = 'index.html';
const index = 'index.html';

// Webpack cfg
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: Path.resolve(common.resolve.alias.public, template),
      filename: index,
    }),
  ],
  devServer: {
    contentBase: common.output.path,
    compress: true,
    publicPath: common.output.publicPath,
    historyApiFallback: true,
    port: 8080,
  },
});
