const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const config = require(path.resolve(__dirname, 'config.js'));

let mainWindow;

/*
  TODO: import config.js into main.js
  use config variables to change environment before start webview
  pass config object with IPC to render process to configure the webview portion
  add webpack to build the bundle
*/

function createWindow () {
  mainWindow = new BrowserWindow({width: config.viewportWidth, height: config.viewportHeigh  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})
