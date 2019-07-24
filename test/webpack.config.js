const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: require.resolve('.'),
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: require.resolve('..'),
        options: {
          debug: process.env.DEBUG === 'true'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin()
  ]
}
