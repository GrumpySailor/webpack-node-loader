const { app, BrowserWindow } = require('electron')

app.once('ready', () => {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  window.loadFile('../dist/index.html')
  window.webContents.once('did-finish-load', () => {
    window.webContents.openDevTools()
  })
})

app.on('window-all-closed', () => app.quit())
