function checkthis(){
    console.log(this)  // here this will return only window type
}
let obj={
    a:20,
    b:30,
    d:function(){
        console.log(this) //here this will return the obj
    }
}
checkthis()
obj.d() 