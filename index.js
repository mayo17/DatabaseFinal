require('./renderer.js')

// document.getElementById("status").addEventListener("click", () => {
//     // connect to mysql
//     connect.connect(function (err) {
//         if (err) {
//             console.log(err.code)
//             console.log(err.fatal)
//         }
//     })

//     $query = "SELECT * FROM professors WHERE user = ? AND pass = ?"

//     connect.query($query, [user, pass], function (err, rows, fields) {
//         if (err) {
//             console.log("An error ocurred while performing the query.")
//             console.log(err)
//             return
//         }else if (rows.length == 0)
//         {
//             console.log("Professor not found.")
//         }else
//         {
//             console.log("Query Professor succesfully executed", rows)
//         }
//     })

//     $query = "SELECT * FROM students WHERE user = ? AND pass = ?"

//     connect.query($query, [user, pass], function (err, rows, fields) {
//         if (err) {
//             console.log("An error ocurred while performing the query.")
//             console.log(err)
//             return
//         }else if (rows.length == 0)
//         {
//             console.log("Student not found.")
//         }else
//         {
//             console.log("Query Student succesfully executed", rows)
//         }
//     })

// }, false)

document.getElementById("btn").addEventListener("click", () => {

    // connect to mysql
    connect.connect(function (err) {
        if (err) {
            console.log(err.code)
            console.log(err.fatal)
        }
    })

    // Perform a query
    $query = 'SELECT * FROM colleges LIMIT 10'

    connect.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
    })
}, false)