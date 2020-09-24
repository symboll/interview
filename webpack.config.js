const path = require('path')

module.exports = {
  target: 'node',
  entry: "./src/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}