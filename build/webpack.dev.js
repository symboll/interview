const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const path =require('path')


module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
  },
})