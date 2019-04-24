require('./renderer.js')

table = document.getElementById("satable")

window.addEventListener("load", () => {
    var user = null;
    // Perform a query to check the status of the most recently logged in user. 
    $query = 'SELECT * FROM logging ORDER BY lid DESC'
    connect.query($query, function (err, logs, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        } else if (logs[0].uid <= 5000) {
            document.getElementById("greeting").innerHTML = "Hello Student";
        } else if (logs[0].uid > 5000) {
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

document.getElementById("clear").addEventListener("click", () => {
    //deletes old table
    while (table.rows.length != 1) {
        row = table.deleteRow(-1)
    }
}, false)

document.getElementById("check").addEventListener("click", () => {
    fname = document.getElementById("fname").value
    lname = document.getElementById("lname").value
    console.log(fname)
    console.log(lname)

    //Query of attendance of a single student at any schools
    $query = "SELECT c.name, a.dstart, a.dend FROM attends a, students s, colleges c WHERE s.fname = ? AND s.lname = ? AND s.sid = a.uid AND a.cid = c.cid GROUP BY c.name"
    connect.query($query, [fname, lname], function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
        //Deletes old table and prints the results to the table
        for (i = 0; i < rows.length; i++) {
            row = table.insertRow()
            cell0 = row.insertCell(0)
            cell1 = row.insertCell(1)
            cell2 = row.insertCell(2)
            cell0.innerHTML = rows[i].name
            cell1.innerHTML = rows[i].dstart.getMonth() + 1 + "/" + rows[i].dstart.getDate() + "/" + rows[i].dstart.getFullYear()
            cell2.innerHTML = rows[i].dend.getMonth() + 1 + "/" + rows[i].dend.getDate() + "/" + rows[i].dend.getFullYear()
        }
    })

}, false)