// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

mysql = require('mysql')

var user = "bross"
var pass = "apple1"

window.addEventListener("load", () =>{
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

    $query = "SELECT * FROM professors WHERE user = ? AND pass = ?"

    connect.query($query, [user, pass], function (err, logs, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }else if (logs.length == 0)
        {
            console.log("Professor not found.")
        }else
        {
            console.log("Query Professor succesfully executed", logs)
        }
    })

    $query = "SELECT * FROM students WHERE user = ? AND pass = ?"

    connect.query($query, [user, pass], function (err, logs, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }else if (logs.length == 0)
        {
            console.log("Student not found.")
        }else
        {
            console.log("Query Student succesfully executed", logs)
        }
    })
}) 

window.addEventListener("unload", () =>{
        // Close the connection
        connect.end(function () {
            // no longer connected to mysql
        })
}) 



// function QueryLoad() {
//     connect = mysql.createConnection({
//         host: 'localhost',
//         user: 'mayo',
//         password: 'kyusung',
//         database: 'usdata'
//     })
// }

// function QueryUnload() {
//         // Close the connection
//         connect.end(function () {
//             // no longer connected to mysql
//         })
// }