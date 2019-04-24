require('./renderer.js')

//Sets the login info with the provided info.
user = document.getElementById("user").value;
pass = document.getElementById("pass").value;

document.getElementById("submit").addEventListener("click", () => {

    //Query to check if the user info is tied to a professor
    $query = "SELECT * FROM professors WHERE user = ? AND pass = ?"
    connect.query($query, [user, pass], function (err, logs, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        } else if (logs.length == 0) {
            console.log("Professor not found.")
            logCheck()
        } else {
            console.log("Query Professor succesfully executed", logs)
            $query1 = "INSERT INTO logging (user, uid) VALUES (?, ?)"   //Inserts user into the log
            connect.query($query1, [user, logs[0].pid], function (err, rows, fields) {
                if (err) {
                    console.log("An error ocurred while performing the query.")
                    console.log(err)
                    return
                }
                {
                    console.log("User logged in", rows)
                    logCheck()
                }
            })
        }
    })

    //Query to check if the user info is tied to a student. 
    $query = "SELECT * FROM students WHERE user = ? AND pass = ?"
    connect.query($query, [user, pass], function (err, logs, fields) {
        if (err) {
            console.log("An error ocurred while performing the query.")
            console.log(err)
            return
        } else if (logs.length == 0) {
            console.log("Student not found.")
            logCheck()
        } else {
            console.log("Query Student succesfully executed", logs)
            console.log(logs[0].sid)
            $query1 = "INSERT INTO logging (user, uid) VALUES (?, ?)"   //Inserts user into the log
            connect.query($query1, [user, logs[0].sid], function (err, rows, fields) {
                if (err) {
                    console.log("An error ocurred while performing the query.")
                    console.log(err)
                    return
                }
                {
                    console.log("User logged in", rows)
                    logCheck()
                }
            })
        }
    })

    //Makes sure successes are not overwritten.
    function logCheck() {
        //Checks if the user successfully logged in. 
        logwarn = document.getElementById("loginwarning")

        //Query to check.
        $query = 'SELECT * FROM logging WHERE user = ?'
        connect.query($query, [user], function (err, rows2, fields) {
            if (err) {
                console.log("An error ocurred while performing the query.")
                console.log(err)
                return
            } else if (rows2.length == 0) {
                logwarn.style.color = "red"
                logwarn.innerHTML = "User does not exist, please try again or register."
            } else {
                console.log("Query succesfully executed", rows2)
                logwarn.style.color = "green"
                logwarn.innerHTML = "Success"
            }
        })
    }

}, false);

document.getElementById("register").addEventListener("click", () => {
    reginfo = document.getElementById("reginfo")
    console.log(reginfo.innerHTML)
    if (reginfo.innerHTML == "") {//Show additional registration info. 
        reginfo.style.color = "red"
        reginfo.innerHTML = "Please fill out the additional information and click register again"
        document.getElementById("moreinfo").style.display = "block"
    } else {
        
    }
}, false)