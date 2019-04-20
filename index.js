document.getElementById("btn").addEventListener("click", () => {
    var mysql = require('mysql');

    var connect = mysql.createConnection({
        host: 'localhost',
        user: 'mayo',
        password: 'kyusung',
        database: 'sakila'
    });

    // connect to mysql
    connect.connect(function (err) {
        // in case of error
        if (err) {
            console.log(err.code);
            console.log(err.fatal);
        }
    });

    // Perform a query
    $query = 'SELECT * FROM `actor` LIMIT 10';

    connect.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed", rows);
    });

    // Close the connection
    connect.end(function () {
        // The connection has been closed
    });

}, false);