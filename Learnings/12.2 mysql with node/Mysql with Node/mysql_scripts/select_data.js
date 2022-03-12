//geting client
const mysql = require('mysql2')

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]

}

//creating connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'testingDatabase',
    user: 'myuser',
    password: 'mypass'
})
connection.query(`SELECT * FROM person;
`, function (err, results, fields) {
    if (err) {
        console.error(err)

    } else {
        console.log(results)
        console.log(fields)
        console.log('Data Displayed')
    }
    connection.close();
})