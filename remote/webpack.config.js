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
    port: 8081,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'host',
      // filename: 'index.html',
      template: './index.html'
    }),
    new ModuleFederationPlugin({
      name: "remote",
      library: { type: "var", name: "remote" },
      filename: "remoteEntry.js",
      exposes: {
        'Button': './src/Button.js',
      },
      shared: ["vue"],
    })
  ],
};