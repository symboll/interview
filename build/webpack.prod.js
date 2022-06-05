const { merge } = require('webpack-merge')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const baseConfig = require('./webpack.config')


module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // css 压缩
    new CssMinimizerWebpackPlugin(),
  ],
})