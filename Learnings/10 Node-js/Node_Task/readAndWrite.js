const fs = require('fs');
fs.readFile(__dirname + '/dataSheet.txt', function (err, data) {
    if (err) throw err
    console.log(data.toString())
    list = new Array();
    var i = 0
    while (data.toString().split('\r\n')[i] == undefined) {
        list[i] = data.toString().split('\r\n')[i]
        i += 1;
    }

    fs.writeFile(__dirname + '/newDataSheet.txt', data, function (err) {
        if (err) throw err
        console.log('File Writed')
    })
})


/* not correct logic */
