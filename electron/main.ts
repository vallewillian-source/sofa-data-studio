import 'babel-polyfill';
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

import { ActionsController } from "./ActionsController";
import { DB } from './models/DB';
import { AuthController } from './AuthController';
import { IAPI } from './models/IApi';

const { ipcMain } = require('electron');

// Open connection to mongoDB
DB.connect().then(function(){
  
  /* Actions */
  ipcMain.on('actions:getAll', async (event, arg) => {
    event.reply('actions:getAll:response', await ActionsController.findAll())
  });

  ipcMain.on('actions:getGroups', async (event, arg) => {
    event.reply('actions:getGroups:response', await ActionsController.getGroups())
  });

  /* Auth */
  ipcMain.on('auth:getLoginEndpoint', async (event, api:IAPI) => {
    event.reply('auth:getLoginEndpoint:response', await AuthController.getLoginEndpoint(api))
  });

  ipcMain.on('auth:processLogin', async (event, response:ILoginResponse[], api:IAPI) => {
    event.reply('auth:processLogin:response', await AuthController.processLogin(response, api))
  });

});

let mainWindow: Electron.BrowserWindow | null

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#221135',
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {

    // Destroy connection to mongoDB
    DB.destroy().then(function(){
      // Destroy window
      mainWindow = null;
    });

  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    }
  })
app.allowRendererProcessReuse = true

