const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html').catch(error => console.error("加载 index.html 时出错：", error))
  
  // 开启开发者工具，方便调试
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow).catch(error => console.error("应用启动失败：", error))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
}) 