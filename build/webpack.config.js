const path = require('path')
const HtmlWebpackPligin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory=true"
      }
    ]
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000
    }
  },
  plugins: [ 
    new HtmlWebpackPligin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico'
    }),
    new CleanWebpackPlugin(),
  ]
}