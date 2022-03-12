// we can create objects in javascript without declaring the classes
let obj={
    a:10,
    b:20,
    c:30
}
//inheritance
let obj2=Object.create(obj)
// now try to access the attributes of obj using obj2 in the console
obj2.p="hello"
obj2.q="world"
// obj2.__proto__ = obj

let obj3=Object.create(obj2)
//obj3.__proto__=obj2
//obj3.__proto__.__proto__=obj

//note __proto__ is only for debugging purpose do not use it in code