const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webapck
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
    filename: 'host.js', // 打包后的文件名
    clean: true,
  },
  devServer: {
    port: 8080,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'host',
      // filename: 'index.html',
      template: './index.html'
    }),
    new ModuleFederationPlugin({
      remotes: ['remote'], // 需要引用的remote列表
      shared: ["vue"] // 共享的模块 也可以用overrides
    })
  ],
};