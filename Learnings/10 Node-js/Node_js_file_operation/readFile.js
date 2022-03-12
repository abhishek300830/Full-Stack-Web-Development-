const fs = require('fs');
fs.readFile(__dirname + '/createdFile.txt', function (err, data) {
    if (err) throw err
    console.log(data)
    console.log(data.toString())

})