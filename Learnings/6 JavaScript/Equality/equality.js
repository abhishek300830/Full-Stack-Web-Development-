console.log(1 == "1") //true
// == will convert this String "1" to int and compare with one and returns true

console.log(1 === "1") // false
// but in case of === no such conversion happens
// here if we have same value and same data type then only it returns true.

//pecuilar cases

console.log(0 == "") //true because if convert Emply string into number it will return 0 Number("")=0

console.log(false == 'false') //false
/* in case comparing boolean and string we convert both to Number
Number(false)=0
but
Number('false')=NaN i.e Not a Number
so they are not equal
*/
console.log('' == false) //true  Number('')=0 and Number(false)=0

// some imp
/*  \n == 0
    \t == 0
    '' == 0
    but 
    \n != \t != ''  because while comparing these there is not type casting
  
*/
console.log([1, 2] == [1, 2])
//false because there data is same but here they are passed by reference like comparing String using == in java 

// for true Condition
a = [1, 2, 3]
b = a
console.log(a == b) //true