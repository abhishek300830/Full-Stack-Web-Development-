let str ="agakjfgak"                    // three level from null
let num = 233                           // three level from null
let arr =[1,2,3]                        // three level from null
let bool = true                         // three level from null
let object = { a:10,b:20,c:'abcdef'}    //2 level from null
let fun= function(){                    // three level from null
    console.log('yah')
}

/* if x and y is non primitive then
 x == y : true (what does that mean)
this means they are reference of same varible in the memory
*/
console.log('********** Types ***********')
console.log('type of String',typeof String )
console.log('type of Boolean',typeof Boolean )
console.log('type of Number',typeof Number )
console.log('type of Array',typeof Array)
console.log('type of Objects',typeof Object )
console.log('type of Function',typeof Function )

//checking proto
console.log('********** Checking proto***********')
console.log(str.__proto__.__proto__.__proto__)      //here we will getting null after 3 proto
console.log(object.__proto__.__proto__)             //here we will getting null after 2 proto

console.log('****** proto chain **********')
console.log(str.__proto__.__proto__== object.__proto__)
console.log(num.__proto__.__proto__== object.__proto__)
console.log(bool.__proto__.__proto__== object.__proto__)
console.log(arr.__proto__.__proto__== object.__proto__)
console.log(fun.__proto__.__proto__== object.__proto__)

// str.__proto__ give the info from where str is inherited

/*  Everything indirectly inherits from the same thing
    that object is inherited from 
    i.e in javascript , everything is essentially an object

*/

console.log('********* Prototype ************')
console.log(object.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

//String.prototype inherits from object.prototype 

/*
type of let x=object.create(Boolean.prototype) == ??     ans is : it is a object
and type of Bool is Boolean
but 
    x.__proto__ == bool.__proto__ is true because they are inherited from the same
    */


console.log(str.charAt(2))
console.log(typeof str.charAt)
let str2="sgdfhsh"
console.log(str.charAt ==str2.charAt)  // true because of same reference( for both charAt is located at String.prototype)

// String.prototype.CharAt = function{ return 'x'} by this we can change functionality of 
// charAt function in javaScript

/*
    String.prototype contains all default String functions
    like charAt , indexOf , substring etc

    */

    // just for debugging purpose if you want to know where join happens in big projects
Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join =function(){
    console.log('Join Called on',this)
    return this.joinOriginal(...arguments)
}
