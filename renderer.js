// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

mysql = require('mysql')

window.addEventListener("load", () => {
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
})

window.addEventListener("unload", () => {
    // Close the connection
    connect.end(function () {
        // no longer connected to mysql
    })
}) 