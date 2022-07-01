class person{
    // no need to initialize here it will done automatically
    constructor(name,age){
        this.name=name
        this.age=age
    }
    isAdult(){
        return this.age >= 18
    }
}
let p =new person('abhi',20)  // object of class person
console.log(typeof person)   // there is no datatype called class it is also a function
console.log(typeof p)       // it it a object
console.log(p.__proto__ == person.prototype) //true
console.log(p.__proto__.__proto__ == Object.prototype) //true

class student extends person{
    constructor(name , age , grade){
        super(name, age)
        this.grade=grade
    }
}
let s1 = new student('aryan',18, 'A')
let s2 = new student('anukul',20,'A')

console.log(s1.__proto__==student.prototype)
console.log(s1.__proto__.__proto__==person.prototype)
console.log(s1.__proto__.__proto__.__proto__==Object.prototype)
// this is inheritance chain here

console.log(typeof s1)