const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = ['scss', 'less','stylus', 'special']

function entryGenerator (pages) {

  const entry = {
    'index': "./src/index.js"
  }
  for (const key of pages) {
    entry[key] = `./src/pages/${key}/index.js`
  }

  return entry
}

function htmlPluginGenerator (pages) {
  const plugin = []
  for (const key of pages) {
    plugin.push(
      new HtmlWebpackPlugin({
        template: `./src/pages/${key}/index.html`,
        chunks: [key],
        filename: `${key}.html`
      })
    )
  }
  return plugin
}


module.exports = {
  pages,
  entryGenerator,
  htmlPluginGenerator
}