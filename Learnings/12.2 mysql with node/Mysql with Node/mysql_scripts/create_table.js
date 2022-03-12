//geting client
const mysql = require('mysql2');

//creating connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'testingdatabase',
    user: 'myuser',
    password: 'mypass'
});

connection.query(`CREATE TABLE IF NOT EXISTS person(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
)

`, function (err, results) {
    if (err) {
        console.error(err)
    } else {
        console.log('Table Created Successfully')
    }
    connection.close();
});