//class decleration
class fruitClass{
    constructor(taste,color){
        this.taste=taste
        this.color=color
    }
}
let Mango=new fruitClass("sweat","Yellow")
console.log(Mango)
console.log(Mango.taste)
console.log(Mango.color)


// another way of declaring a class - class expression
let fruitClass2=class{
    constructor(taste,color){
        this.taste=taste
        this.color=color
    }
}