const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
        {
          test:/\.jsx?$/,
          exclude: /node_modules/,
          use: [{
              loader: "babel-loader",
              options: { presets: ["env", "react", 'stage-2'] }
          }],
        },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'first-react',
      template: __dirname + '/public/index.html'
    })
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),//本地服务器所加载的页面所在的目录
    inline: true, //实时刷新
    port: 9000, //端口改为9000
    open:true // 自动打开浏览器
  }
};