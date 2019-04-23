require('./renderer.js')

document.getElementById("btnstatus").addEventListener("click", () => {

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