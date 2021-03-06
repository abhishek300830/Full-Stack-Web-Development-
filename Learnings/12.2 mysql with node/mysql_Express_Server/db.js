const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'testingdatabase'
})

function getAllPersons() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM person;
        `, function (err, rows, cols) {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }

        })
    })
}
function addNewPerson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO person (name,age,city) VALUES(?,?,?)',
            [name, age, city],
            function (err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}
module.exports = {
    getAllPersons,
    addNewPerson
}