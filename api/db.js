const mysql = require('mysql2');

// connect database
var db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "root1234",
    database: process.env.DB_NAME || "minhhv11"
  });



// query database minhhv11 table Persons

/*
db.connect(function(err) {
if (err) throw err;
db.query("SELECT * FROM Persons", function (err, result, fields) {
if (err) throw err;
console.log(result);
});
});
*/
module.exports = db