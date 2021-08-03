const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  target: 'web',
  entry: {
    'index': "./src/index.js",
    'scss': "./src/pages/scss/index.js",
    'less': "./src/pages/less/index.js",
    'stylus': "./src/pages/stylus/index.js",
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/scss/index.html',
      chunks: ['scss'],
      filename: "scss.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/less/index.html',
      chunks: ['less'],
      filename: "less.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/stylus/index.html',
      chunks: ['stylus'],
      filename: "stylus.html"
    }),
    new CleanWebpackPlugin()
  ]
}