const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
        {
          test:/\.jsx?$/,
          exclude: /node_modules/,
          use: [{
              loader: "babel-loader",
              options: { presets: ["env","react"] }
          }],
        },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '测试输入',
      template: __dirname + '/public/index.html'
    })
    // new webpack.optimize.UglifyJsPlugin()
  ]
};