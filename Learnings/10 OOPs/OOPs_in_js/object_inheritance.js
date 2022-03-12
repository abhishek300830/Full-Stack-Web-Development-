let a = { p: 10, q: 'abhishek' } //object
let b = Object.create(a) //creating object b and inheriting a in it
let c = Object.create(b) //creating object c and inheritinf a,b both in it

console.log(a)
console.log(b) // it is showing empty in output
console.log(b.q) // but we can access q through it
console.log(c.q) // we can also access q from c
b.q = 'abhishek Gurjar'
console.log(b)
console.log(c.q)