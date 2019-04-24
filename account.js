require('./renderer.js')

window.addEventListener("load", () => {
    var user = null;
    // Perform a query to check the status of the most recently logged in user. 
    $query = 'SELECT * FROM logging ORDER BY lid DESC'
    connect.query($query, function (err, logs, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }else if(logs[0].uid <= 5000) {
            document.getElementById("greeting").innerHTML = "Hello Student";
        }else if(logs[0].uid > 5000) {
            document.getElementById("greeting").innerHTML = "Hello Professor";
            document.getElementById("studentattendance").style.display = "block";
        }
    })
})

document.getElementById("generate").addEventListener("click", () => {
    // Perform a query to check how many people are logged in. 
    $query = 'SELECT * FROM logging'
    connect.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
        document.getElementById("status").innerHTML = rows.length + " user(s) logged in"
    })

}, false)

document.getElementById("check").addEventListener("click", () => {
    // Perform a query to check how many people are logged in. 
    $query = 'SELECT * FROM logging'
    connect.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
        document.getElementById("status").innerHTML = rows.length + " user(s) logged in"
    })

}, false)