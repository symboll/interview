const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  target: 'web',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
  },
  entry: {
    'index': "./src/index.js",
    'extension': './src/extension/index.js',
    'func': './src/func/index.js',
    'control': './src/control/index.js',
    'mixins':'/src/mixins/index'
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/i,
        use: ['style-loader','css-loader', 'less-loader']
      },
      {
        test: /\.s(c|a)ss$/i,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.styl$/i,
        use: ['style-loader','css-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/extension/index.html',
      chunks: ['extension'],
      filename: "extension.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/func/index.html',
      chunks: ['func'],
      filename: "func.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/control/index.html',
      chunks: ['control'],
      filename: "control.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/mixins/index.html',
      chunks: ['mixins'],
      filename: "mixins.html"
    }),
    new CleanWebpackPlugin()
  ]
}