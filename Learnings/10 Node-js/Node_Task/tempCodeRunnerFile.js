fs.writeFile(__dirname + '/newDataSheet.txt', data.toString(), function (err) {
    if (err) throw err
    console.log('File Writed')
})