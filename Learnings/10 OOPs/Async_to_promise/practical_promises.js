function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith('http')) {
            reject(new Error('URL does not start with http'))
        } else {
            setTimeout(() => {                          //fake 3 sec timeout
                let fileName = url.split('/').pop()
                resolve(fileName)
            }, 3000);
        }
    })
}
function resize(fileName) {
    return new Promise(function (resolve, reject) {
        if (!fileName.endsWith('.png')) {
            reject(new Error('File is not png'))
        } else {
            setTimeout(() => {                          // 3 sec fake timeout
                // x.png => x-resized.png
                let resizedFile = fileName.split('.')[0] + "-resized.png"
                resolve(resizedFile)
            }, 3000);
        }
    })
}
download('http://cbk.tk/logo.png')
    .then(resize)
    .then(function (resizedFile) {
        console.log("resized file is : " + resizedFile)
    })
    .catch(function (err) {
        console.error(err)
    })