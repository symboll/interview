const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { pages, entryGenerator, htmlPluginGenerator } = require('./pages')

const styleLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
]

module.exports = {
  target: 'web',
  entry: entryGenerator(pages),
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [      
      {
        test: /\.(gif|png|jpe?g)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: 'image/[name][ext]',
        },
      },

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
  plugins: [
    // css 独立打包
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: "index.html"
    }),
    ...htmlPluginGenerator(pages),
    new CleanWebpackPlugin()
  ]
}