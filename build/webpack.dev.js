const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const path =require('path')


module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
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
})