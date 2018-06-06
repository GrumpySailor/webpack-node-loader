const { stringifyRequest } = require('loader-utils')

module.exports = function () {
  const filepath = stringifyRequest(this, this.resourcePath)
  return `
    try {
      global.process.dlopen(module, '${filepath}')
    } catch (error) {
      throw new Error (\`Cannot open ${filepath}: \${error}\`)
    }
  `.trim().replace(/\s+/g, ' ')
}
