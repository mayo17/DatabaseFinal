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
        } else if (logs[0].uid <= 5000) {
            document.getElementById("greeting").innerHTML = "Hello Student";
        } else if (logs[0].uid > 5000) {
            document.getElementById("greeting").innerHTML = "Hello Professor";
            document.getElementById("studentattendance").style.display = "block";
        }
    })
})

document.getElementById("generate").addEventListener("click", () => {
    table = document.getElementById("searchtable")
    search = document.getElementById("search").value + '%'
    console.log(search)
    // Perform a query to print the colleges based on search. 
    $query = "SELECT name, hdeg, state, county, zip FROM colleges WHERE (name LIKE ?) OR (hdeg LIKE ?) OR (state LIKE ?) OR (county LIKE ?) OR (zip LIKE ?) GROUP BY name"
    connect.query($query, [search, search, search, search, search], function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
        //prints the results to the table
        for (i = 0; i < rows.length; i++) {
            row = table.insertRow()
            cell0 = row.insertCell(0)
            cell1 = row.insertCell(1)
            cell2 = row.insertCell(2)
            cell3 = row.insertCell(3)
            cell4 = row.insertCell(4)
            cell0.innerHTML = rows[i].name
            cell1.innerHTML = rows[i].hdeg
            cell2.innerHTML = rows[i].state
            cell3.innerHTML = rows[i].county
            cell4.innerHTML = rows[i].zip
        }
    })

}, false)

document.getElementById("clear2").addEventListener("click", () => {
    table = document.getElementById("searchtable")
    //deletes old table
    while (table.rows.length != 1) {
        row = table.deleteRow(-1)
    }
}, false)

document.getElementById("clear").addEventListener("click", () => {
    table = document.getElementById("satable")
    //deletes old table
    while (table.rows.length != 1) {
        row = table.deleteRow(-1)
    }
}, false)

document.getElementById("check").addEventListener("click", () => {
    table = document.getElementById("satable")
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
        //prints the results to the table
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

document.getElementById("generate3").addEventListener("click", () => {
    table = document.getElementById("gen3table")
    tuition = document.getElementById("tuition").value
    // Perform a query to print the colleges based on tuition. 
    $query = "SELECT name, tuition, state, county, zip FROM colleges WHERE tuition < ? GROUP BY name"
    connect.query($query, [tuition], function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
        //prints the results to the table
        for (i = 0; i < rows.length; i++) {
            row = table.insertRow()
            cell0 = row.insertCell(0)
            cell1 = row.insertCell(1)
            cell2 = row.insertCell(2)
            cell3 = row.insertCell(3)
            cell4 = row.insertCell(4)
            cell0.innerHTML = rows[i].name
            cell1.innerHTML = "$" + rows[i].tuition + " per year"
            cell2.innerHTML = rows[i].state
            cell3.innerHTML = rows[i].county
            cell4.innerHTML = rows[i].zip
        }
    })

}, false)

document.getElementById("clear3").addEventListener("click", () => {
    table = document.getElementById("gen3table")
    //deletes old table
    while (table.rows.length != 1) {
        row = table.deleteRow(-1)
    }
}, false)

document.getElementById("generate4").addEventListener("click", () => {
    table = document.getElementById("gen4table")
    accept = document.getElementById("accept").value
    // Perform a query to print the colleges based on acceptance rate
    $query = "SELECT name, (adnum/appnum * 100) AS accepted, state, county, zip FROM colleges WHERE (adnum/appnum * 100) <= ? ORDER BY (adnum/appnum * 100) DESC"
    connect.query($query, [accept], function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        }
        console.log("Query succesfully executed", rows)
        //prints the results to the table
        for (i = 0; i < rows.length; i++) {
            row = table.insertRow()
            cell0 = row.insertCell(0)
            cell1 = row.insertCell(1)
            cell2 = row.insertCell(2)
            cell3 = row.insertCell(3)
            cell4 = row.insertCell(4)
            cell0.innerHTML = rows[i].name
            cell1.innerHTML = rows[i].accepted + "%"
            cell2.innerHTML = rows[i].state
            cell3.innerHTML = rows[i].county
            cell4.innerHTML = rows[i].zip
        }
    })

}, false)

document.getElementById("clear4").addEventListener("click", () => {
    table = document.getElementById("gen4table")
    //deletes old table
    while (table.rows.length != 1) {
        row = table.deleteRow(-1)
    }
}, false)