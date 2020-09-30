const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  mode: 'development',
  target: 'node',
  entry: "./src/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [ nodeExternals() ],
  resolve: {
    extensions: ['.js', '.jsx',],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", [
            "@babel/preset-env", 
              { 
                "useBuiltIns": "entry", 
                "corejs": { "version": 3, "proposals": true }
              }
            ]
          ]
        }
      }
    ]
  }
}