# @grumpy/webpack-node-loader

A zero config Webpack loader for loading `.node` files and more.

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
