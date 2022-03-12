class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class student extends person {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }
}
let p = new person('Abhishek', 19)
let s = new student('Aryan', 17, 'ips')
console.log(p)
console.log(s)