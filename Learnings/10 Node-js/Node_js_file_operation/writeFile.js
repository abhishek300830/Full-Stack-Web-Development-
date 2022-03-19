const fs = require('fs') //inbuild library of node check details on node Documentation

fs.writeFile(__dirname + '/createdFile.txt', "Some NEW data", function (err) {
    if (err) throw err
    console.log('File was Written')
})