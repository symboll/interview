const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('./webpack.config')
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // }
    // hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              importLoaders:1   // 保证@import语法引入的css文件也执行 postcss-loader 这个loader 
            }
          }, 
          'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders:2,
              // modules:true
            }
          },
          'postcss-loader',
          // 'sass-loader'
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js'
  }
}

module.exports = merge(config,devConfig)