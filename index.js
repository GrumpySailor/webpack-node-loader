const { stringifyRequest } = require('loader-utils')

module.exports = exports = function (content) {
  if (!this.emitFile || typeof this.emitFile !== 'function') {
    throw new Error('this.emitFile is required')
  }
  const filepath = stringifyRequest(this, this.resourcePath)
  this.emitFile(filepath, content)
  return `
    try {
      global.process.dlopen(module, '${filepath}')
    } catch (error) {
      throw new Error (\`Cannot open ${filepath}: \${error}\`)
    }
  `.trim().replace(/\s+/g, ' ')
}

exports.raw = true
