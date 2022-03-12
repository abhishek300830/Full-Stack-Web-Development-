let btnWait=document.getElementById('btnWait')
let btnCount=document.getElementById('btnCount')
let divStatus=document.getElementById('divStatus')
let divCounter=document.getElementById('divCounter')

let count=0
btnCount.onclick=function(){
    count++;
    divCounter.textContent=count;
}

btnWait.onclick=function(){
    divStatus.textContent='Waiting'
    // wait for 5 sec
    setTimeout(() =>{ divStatus.textContent='Done'},5000)   
}
