//not using new keyword
function person(name, age) {
    this.name = name
    this.age = age
    return 10
}
let p = person('Abhishek Gurjar', 19)
console.log(p)
console.log(name)
console.log(age)

// using new keyword in object declaration 
console.log('*** Using New Keyword ***')

function person1(name1, age1) {
    this.name1 = name1
    this.age1 = age1
}
let p1 = new person1('harry poter', 20)
console.log(p1)
/*console.log(name1)  */ //you can't access this here with new keyword