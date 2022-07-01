let Array = ["apple","mango","banana"];
console.log(Array)

for(let i=0; i<Array.length;i++){
    console.log(Array[i])
}

//functions 
Array.push("kiwi") //used to insert any element at end
console.log(Array)
Array.pop();
console.log(Array)
Array.shift() //remove element from beginning
Array.unshift("pomegranate") // insert element at front
console.log(Array)
console.log(Array.indexOf("banana"))

//conditional statements 
if(Array[0]=="apple"){
    console.log("it is apple")
}
else{
    console.log("it is not apple it is",Array[0])
}
