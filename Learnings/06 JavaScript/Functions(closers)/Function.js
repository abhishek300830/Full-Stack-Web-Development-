console.log(beta())  //we can call function before defining this is called hoisting in java script

function alpha() {
    return 'a';
}
function beta() {  //Hoisted function
    return 'b';
}

// Another Way of defining Function
let gamma = function () {  // Non Hoisted Functions
    return 'g'
}

//parameterized Constructor 
function area(height, width) {
    if (width == undefined) {
        return Math.PI * height * height
    }
    return height * width
}
console.log('area 3,4 ', area(3, 4))
console.log('area 4 ', area(4))

function Hello() {
    console.log('Hellow World ' + arguments[0] + arguments[1])
}
Hello(1, 2)