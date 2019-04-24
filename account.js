require('./renderer.js')

//to store the type of user and table
uid = null;
table = document.getElementById("sptable")

window.addEventListener("load", () => {
    document.getElementById("addattend").style.display = "block";
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
            uid = logs[0].uid;
        } else if (logs[0].uid > 5000) {
            document.getElementById("greeting").innerHTML = "Hello Professor <br> You have access to view student records on the Search Page";
            uid = logs[0].uid;
        }
    })

    //For populating the dropdown box. 
    sel = document.getElementById("cname")
    //Query for the names of every available college. 
    $query1 = "SELECT name FROM colleges ORDER BY name ASC"
    connect.query($query1, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        } else {
            for (i = 0; i < rows.length; i++) {
                c = document.createElement("option")
                c.text = rows[i].name
                sel.options.add(c)
            }
        }
    })
})

document.getElementById("clear").addEventListener("click", () => {
    //deletes old table
    while (table.rows.length != 1) {
        row = table.deleteRow(-1)
    }
}, false)

document.getElementById("generate").addEventListener("click", () => {
    //Query of attendance of the currently logged in user.
    $query = "SELECT c.name, a.dstart, a.dend FROM attends a, colleges c WHERE a.uid = ? AND a.cid = c.cid GROUP BY c.name"
    connect.query($query, [uid], function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        } else
            console.log("Query succesfully executed", rows)
        //Prints the results to the table
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
})

document.getElementById("add").addEventListener("click", () => {
    //Instantiate values to be added. 
    cid = null;
    dstart = document.getElementById("dstart").value
    dend = document.getElementById("dend").value
    cname = document.getElementById("cname").value

    //Query to get the cid from college name and then insert new attendance entry
    $query = 'SELECT cid FROM colleges WHERE name = ?'
    connect.query($query, [cname], function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        } else {
            cid = rows[0].cid;
            console.log("Query succesfully executed", rows)
            $query2 = 'INSERT INTO attends (uid, cid, dstart, dend) VALUES (?, ?, ?, ?)'
            connect.query($query2, [uid, cid, dstart, dend], function (err, rows2, fields) {
                if (err) {
                    console.log("An error ocurred while performing the query.")
                    console.log(err)
                    return
                }
                console.log("Query succesfully executed", rows2)
                document.getElementById("notice").style.color = "green"
                document.getElementById("notice").innerHTML = "Attendance Added"
            })
        }
    })

}, false)