require('./renderer.js')

document.getElementById("submit").addEventListener("click", () => {
    //Sets the login info
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

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
    //sets the registration info
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    pass2 = document.getElementById("pass2").value;
    sorp = document.getElementById("sorp").value;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    dob = document.getElementById("dob").value;
    state = document.getElementById("state").value;
    zip = document.getElementById("zip").value;
    salary = document.getElementById("salary").value;
    reginfo = document.getElementById("reginfo")

    if (reginfo.innerHTML == "" || pass != pass2) {//Show additional registration info. 
        console.log(reginfo.innerHTML)
        reginfo.style.color = "red"
        reginfo.innerHTML = "Please fill out the additional information and click register again"
        document.getElementById("moreinfo").style.display = "block"
    } else {
        //Checks to run the student or professor query. 
        if (sorp == "student") {
            $query = "INSERT INTO students (fname, lname, dob, state, zip, user, pass) VALUES (?, ?, ?, ?, ?, ?, ?)"
            connect.query($query, [fname, lname, dob, state, zip, user, pass], function (err, rows, fields) {
                if (err) {
                    console.log("An error ocurred while performing the query.")
                    console.log(err)
                    return
                } else {
                    console.log("Student Query succesfully added", rows)
                    reginfo.style.color = "green"
                    reginfo.innerHTML = "Success"
                    //Checks the newly registered student and gets the id
                    $query2 = "SELECT sid FROM students ORDER BY sid DESC LIMIT 1"
                    connect.query($query2, function (err, logs2, fields) {
                        if (err) {
                            console.log("An error ocurred while performing the query.")
                            console.log(err)
                            return
                        } else {
                            console.log("User found", logs2)
                            $query1 = "INSERT INTO logging (user, uid) VALUES (?, ?)"   //Inserts user into the log
                            connect.query($query1, [user, logs2[0].pid], function (err, logs, fields) {
                                if (err) {
                                    console.log("An error ocurred while performing the query.")
                                    console.log(err)
                                    return
                                } else {
                                    console.log("User logged in", logs)
                                }
                            })
                        }
                    })
                }
            })
        } else if (sorp == "professor") {
            $query = "INSERT INTO professors (fname, lname, dob, state, zip, salary, user, pass) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
            connect.query($query, [fname, lname, dob, state, zip, salary, user, pass], function (err, rows, fields) {
                if (err) {
                    console.log("An error ocurred while performing the query.")
                    console.log(err)
                    return
                } else {
                    console.log("Professor Query succesfully added", rows)
                    reginfo.style.color = "green"
                    reginfo.innerHTML = "Success"
                    //Checks the newly registered professor and gets the id
                    $query2 = "SELECT pid FROM professors ORDER BY pid DESC LIMIT 1"
                    connect.query($query2, function (err, logs2, fields) {
                        if (err) {
                            console.log("An error ocurred while performing the query.")
                            console.log(err)
                            return
                        } else {
                            console.log("User found", logs2)
                            $query1 = "INSERT INTO logging (user, uid) VALUES (?, ?)"   //Inserts user into the log
                            connect.query($query1, [user, logs2[0].pid], function (err, logs, fields) {
                                if (err) {
                                    console.log("An error ocurred while performing the query.")
                                    console.log(err)
                                    return
                                } else {
                                    console.log("User logged in", logs)
                                }
                            })
                        }
                    })

                }
            })
        }
    }
}, false)