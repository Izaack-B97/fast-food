
const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');

// Server
require('./backend/app');
// Reload --> Sirve para refrescar cualquier cambio 
// en el front
// require('electron-reload')(__dirname);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;
let cocineroWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1350,
    height: 750,
    minWidth: 1350,
    minHeight: 750,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true 
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'public/index.html'));

  mainWindow.setMenuBarVisibility( false );
  mainWindow.setMenu( null )
  mainWindow.maximize(); 
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  
  cocineroWindow = new BrowserWindow({
    width: 1300,
    height: 750,
    resizable: false,
    // transparent: true,
    // closable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true 
    }
  });

  cocineroWindow.setMenu(  null );
  cocineroWindow.setMenuBarVisibility( false );
  // cocineroWindow.maximize();
  cocineroWindow.loadFile( path.join(__dirname, 'public/cocinero.html') );

  // Cerramos toda la app cuando se cierre la ventana principal
  mainWindow.on('close', () => {
    console.log('Cerrando aplicacion')
    app.quit() // Cierra toda la aplicacion
  })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


ipcMain.on('event:hola', (event, mensaje) => {
  mainWindow.webContents.send('event:back-message', mensaje);
});

ipcMain.on('orden-levantada', ( evet, orden ) => {
  cocineroWindow.webContents.send('orden-levantada', orden);
});

ipcMain.on('orden-lista', ( event, data ) => {
  // console.log( data );
  mainWindow.webContents.send('orden-lista', data);
});

ipcMain.on('chat-cocinero', ( event, data ) => {
  // console.log( data );
  cocineroWindow.webContents.send('chat-cocinero', data);
});

ipcMain.on('chat-cajero', ( event, data ) => {
  // console.log( data );
  mainWindow.webContents.send('chat-cajero', data);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and the  ir menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// FIXME: MIS FUNCIONES

const newNotification = ( title, mensaje ) => {
  console.log(title, mensaje);
  const myNotification = new Notification( title, { body: mensaje } );
  myNotification.show();
};

const hola = () => {
  console.log('Hola');
}

module.exports = {
  newNotification,
  hola
};