let btnWait = document.getElementById('btnWait')
let inpNum = document.getElementById('inpNum')
let btnCancel = document.getElementById('btnCancel')

let count = false

let wait = function (timeout, done) {
    if (isNaN(parseInt(timeout))) {
        done(new Error('TimeOut must be a Number'))
    }
    else {
        setTimeout(() => { done(null) }, timeout)
    }
}

btnWait.onclick = function () {
    count = false
    wait(inpNum.value, (err) => {
        if (err) { console.error(err) }
        else {
            if (count == false) {
                console.log(`Waited ${inpNum.value} Milli Seconds`)
            }
        }


    })

}
btnCancel.onclick = function () {
    count = true
    console.log('Wait was Cancelled')

}