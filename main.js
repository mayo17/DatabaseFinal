// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const Menu = electron.Menu;

mysql = require('mysql')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  connect = mysql.createConnection({
    host: 'localhost',
    user: 'mayo',
    password: 'kyusung',
    database: 'usdata'
  })
  
  connect.connect(function (err) {
    if (err) {
        console.log(err.code)
        console.log(err.fatal)
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('login.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    $query = "DELETE FROM logging"

    connect.query($query, function (err, rows, fields) {
      if (err) {
        console.log("An error ocurred while performing the query.")
        console.log(err)
        return
      }
      //console.log("Delete succesfully executed", rows)
    })

    connect.end(function () {
      //console.log("MYSQL connection closed")
    })

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', function () {
  createWindow()

  const template = [
    {
      label: 'Login',
      click: function () {
        mainWindow.loadFile('login.html')
      }
    },
    {
      label: 'Search',
      click: function () {
        mainWindow.loadFile('search.html')
      }
    },
    {
      label: 'Account Info',
      click: function () {
        mainWindow.loadFile('account.html')
      }
    }
  ]

  const menu = Menu.buildFromTemplate(template)

  Menu.setApplicationMenu(menu)

});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
