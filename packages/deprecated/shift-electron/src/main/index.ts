import { app, BrowserWindow } from 'electron'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    // webPreferences: {
    //   preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    // },
  })

  // and load the index.html of the app.
  // mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  // const pageUrl = import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
  //   ? import.meta.env.VITE_DEV_SERVER_URL
  //   : new URL('../renderer/dist/index.html', 'file://' + __dirname).toString()

  mainWindow.loadURL(new URL('../core/dist/index.html', 'file://' + __dirname).toString())

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// linux/windows window behavior
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// macos window behavior
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
