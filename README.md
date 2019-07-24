# @grumpy/webpack-node-loader

A zero config Webpack loader for loading `.node` files.

## Installing
Run the following command in the project folder to install the package:
```
npm install --save-dev @grumpy/webpack-node-loader
```

Add the following rule to your webpack config:
```js
{
  test: /\.node$/,
  loader: '@grumpy/webpack-node-loader'
}
```
## Troubleshooting
Debugging can be enabled by setting the webpack `mode` to `'development'` or setting the `debug` option to `true`.
```js
{
  test: /\.node$/,
  loader: '@grumpy/webpack-node-loader',
  options: {
    debug: true
  }
}
```

When using `.node` files in electron make sure to enable node integration in the web preferences. Before you do this make sure you familiarize yourself with the Electron [Security Recommendations](https://github.com/electron/electron/blob/master/docs/tutorial/security.md#2-do-not-enable-nodejs-integration-for-remote-content)

Example:
```js
{
  webPreferences: {
    nodeIntegration: true,
    nodeIntegrationInWorker: true
  }
}
```
