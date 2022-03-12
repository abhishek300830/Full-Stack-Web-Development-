let inpNum = document.getElementById('inpNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')

btnPrint.onclick = function () {
    let start = Date.now() // used to calculate time taken by code
    // code here 
    /*
    write a program to print number till entered by user
    if no is divisible by 3 print fizz in place of Number
    if no is divisible by 5 print buzz in place of Number
    if no is divisible by 3 and 5 both then print fizzbuzz in place of Number

    */

    for (let i = 1; i <= inpNum.value; i++) {
        let li = document.createElement('li')
        let print = ''
        if (i % 3 == 0) print += "fizz"
        if (i % 5 == 0) print += "buzz"
        if (print == '') print = i
        li.textContent = print
        ulNumlist.appendChild(li)
    }
    // more optimized login is 
    /*
    c3=0
    c5=0
    for (let i = 1; i <= inpNum.value; i++) {
        let li = document.createElement('li')
        c3++
        c5++
        let print = ''
        if (c3 == 3) {c3=0; print += "fizz"}
        if (c5 ==5) {c5=0; print += "buzz"}
        if (print == '') print = i
        li.textContent = print
        ulNumlist.appendChild(li)
    }

    */

    console.log("time taken : ", Date.now() - start)
}