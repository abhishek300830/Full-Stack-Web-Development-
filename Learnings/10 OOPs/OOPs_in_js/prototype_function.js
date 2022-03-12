function person(name, age) {
    this.name = name
    this.age = age
    this.isAdult = function () { return this.age >= 18 }
}
let p1 = new person("Abhishek", 20)
let p2 = new person("rockey", 10)
console.log(p1.isAdult())
console.log(p2.isAdult())
console.log(p1.isAdult == p2.isAdult) // this is false so this function isAdult is created twice one for P1 and one for P2


// way to create isAdult function which is same for all objects is 
console.log("*** New Way ***")

function person1(name, age) {
    this.name = name
    this.age = age
}
person1.prototype.isAdult = function () { return this.age >= 18 } //avaiable for both at one memory location

let p3 = new person1("Abhishek", 20)
let p4 = new person1("rockey", 10)
console.log(p3.isAdult())
console.log(p4.isAdult())
console.log(p3.isAdult == p4.isAdult)