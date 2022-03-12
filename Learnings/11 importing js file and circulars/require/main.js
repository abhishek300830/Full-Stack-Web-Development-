console.log('Hello World')
if (typeof window != 'undefined') {
    console.log('running in Browser')
} else {
    console.log('running in Node')
}
//calling function of lib1 here
//while running code in browser we don't need to import but to run code in Node we have to import Modules
// just put that file in html file before this file

/* sayHello('Abhishek')  this will not work now*/

//importing lib1
const lib1 = require('./lib1')
lib1.sayHello('Gurjar')

console.log(lib1)
setTimeout(() => {
    console.log(lib1)
}, 2000);