const electron = require('electron')
const { test } = require('./test-c-addon.node')

if (test() !== 'c-addon') {
  process.exitCode = 1
  throw new Error('Failed to import & use .node file.')
} else {
  process.stdout.write('Successfully imported a .node file\n')
  electron.remote.app.quit()
}
