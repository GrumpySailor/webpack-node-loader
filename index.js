/* global __non_webpack_require__ */
const loaderUtils = require('loader-utils')
const path = require('path')

const production = (specifier) => { module.exports = exports = __non_webpack_require__(specifier) }

const development = (specifier) => {
  try {
    __non_webpack_require__.resolve(specifier)
  } catch (original) {
    const error = new Error([
      `Cannot find module '${specifier}'`,
      `[@grumpy/webpack-node-loader]: Failed to find .node file at specified path.`,
      `[@grumpy/webpack-node-loader]: This is probably caused by an invalid path.`,
      `[@grumpy/webpack-node-loader]: require.resolve.path:`,
      '\t' + __non_webpack_require__.resolve.paths(specifier).join('\n\t')
    ].join('\n'))
    error.original = original
    throw error
  }

  try {
    module.exports = exports = __non_webpack_require__(specifier)
  } catch (original) {
    const error = new Error([
      `Cannot find module '${specifier}'`,
      `[@grumpy/webpack-node-loader]: Failed to open .node file at specified path.`,
      `[@grumpy/webpack-node-loader]: This is probably caused by an incompatible binary.`
    ].join('\n'))
    error.original = original
    throw error
  }
}

module.exports = exports = function (content) {
  if (!this || !this.webpack) {
    throw new Error('Cannot use @grumpy/webpack-node-loader in non webpack environment')
  }

  const options = loaderUtils.getOptions(this) || {}
  const debug = this.mode !== 'production' || options.debug

  const filename = path.parse(this.resourcePath).base
  this.emitFile(filename, content)

  const filepath = loaderUtils.stringifyRequest(this, this.resourcePath)
  const source = debug ? development : production
  return `(${source.toString()})(${filepath})`
}

exports.raw = true
