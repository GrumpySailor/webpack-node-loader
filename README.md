# @grumpy/webpack-node-loader

A zero config Webpack loader for loading `.node` files,
uses [\_\_non_webpack_require__](https://webpack.js.org/api/module-variables/#__non_webpack_require__-webpack-specific-) benind the scenes.

## Example:
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.node$/,
        use: '@grumpy/webpack-node-loader'
      }
    ]
  }
}
```

## Usage in Electron with Web Workers
```js
new BrowserWindow({
  webPreferences: {
    nodeIntegrationInWorker: true
  }
})
```
