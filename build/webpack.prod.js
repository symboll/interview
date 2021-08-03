const { merge } = require('webpack-merge')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config')
const path =require('path')

const styleLoader = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../'
    }
  }, 
  'css-loader',
]
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css'
    }),
    new CssMinimizerWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: styleLoader
      },
      {
        test: /\.less$/i,
        use: [...styleLoader, 'less-loader']
      },
      {
        test: /\.s(c|a)ss$/i,
        use: [...styleLoader, 'sass-loader']
      },
      {
        test: /\.styl$/i,
        use: [...styleLoader, 'stylus-loader']
      }
    ]
  },
})