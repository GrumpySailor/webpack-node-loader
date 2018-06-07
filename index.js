const { stringifyRequest } = require('loader-utils')
const path = require('path')

module.exports = exports = function (content) {
  if (!this.emitFile || typeof this.emitFile !== 'function') {
    throw new Error('this.emitFile is required')
  }
  const filename = path.parse(this.resourcePath).base
  this.emitFile(filename, content)
  const filepath = stringifyRequest(this, this.resourcePath)
  return `
    try {
      global.process.dlopen(module, ${filepath})
    } catch (error) {
      throw new Error (\`Cannot open ${filepath}: \${error}\`)
    }
  `.trim().replace(/\s+/g, ' ')
}

exports.raw = true
