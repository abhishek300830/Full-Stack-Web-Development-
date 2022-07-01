/* function dosomething(done) {
    console.log("1.this is first")
    done()
}
dosomething(() => {
    console.log("2.this is second")
})
console.log("3.this is third") */


function dosomething(done) {
    console.log("1.this is first")
    setTimeout(done, 0);  // if this function is used this will execute after 3
}
dosomething(() => {
    console.log("2.this is second")
})
console.log("3.this is third")