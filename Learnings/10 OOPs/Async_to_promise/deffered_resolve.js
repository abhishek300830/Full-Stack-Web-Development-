function downloadPromise() {
    return new Promise(function (resolve, reject) {
        console.log('Starting Download')
        setTimeout(() => {
            console.log('download Complete')
            resolve()

        }, 3000);
    })
}
/* downloadPromise().then(function () {
    console.log('after downlaod')                 //diect way
}) */

//if want some time here

let downloadedFile = downloadPromise()
setTimeout(function () {
    downloadedFile.then(function () {
        console.log("After Downlaod")
    })
}, 4000)