// in javascript objects are create without defining a class
var bird={
    color:"red",
    X:100,
    Y:20,
    eggs:["one","two","Three"],
    fly:function(){
        console.log("bird is flying at",this.X,this.Y)
    }

}
console.log(bird.color)
console.log(bird.fly())

// another way of creating object
function fruit(taste,color){
    this.taste=taste
    this.color=color
}
let mango = new fruit("sweat","yellow")
let orange=new fruit("sour","orange")

console.log(mango)