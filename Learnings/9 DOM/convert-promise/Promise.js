let btnWait = document.getElementById('btnWait')
let inpNum = document.getElementById('inpNum')

let wait = function (timeout) {
    return new Promise((resolve, reject) => {
        if (isNaN(parseInt(timeout))) {
            reject(new Error("Timeout Should be a Number"))
        }
        else {
            setTimeout(resolve, timeout)
        }
    })
}
/* let Num = parseInt(inpNum.textContent) */
btnWait.onclick = function () {
    wait(inpNum.value)
        .then(() => { console.log(`waited for  seconds`) })
        .catch((err) => { console.error(err) })
}