a = 20; //global variable
var b = 30; // function Scope
let c = 40; //block scope

function add() { // this is a function
    var x = 10;
    console.log("Local", x)
    if (x == 10) { // this is a block
        var y = 20;
        console.log("Block", y)
    }// block ends

    //if we want to access y here we can't. we have to change let by var to make its function scope
    console.log("try to access y outside of scope", y)
}//function ends
console.log(add())