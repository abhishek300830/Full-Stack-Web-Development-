// hof --> Higher Order Functions

function createGreeting(greeting){
    function greet(name){
        console.log(greeting, name)
    }
    return greet
}
let g1=createGreeting('Good Morning')
let g2=createGreeting('Good Evening')

function getName(){
    return document.getElementById("textbox").value
}