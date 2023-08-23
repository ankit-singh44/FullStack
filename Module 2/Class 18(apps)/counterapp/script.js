let plusbtn=document.querySelector(".incr")
let containervalue=document.querySelector("h2")
let minusbtn=document.querySelector(".decr")
let input=document.querySelector("input")
let incrDecr=1;
let resetbtn=document.querySelector(".reset")


input.addEventListener("change",function(){
    let value=input.value;
    // console.log(value);
    if(value==""){
        incrDecr=1;
        return;
    }  
    incrDecr=parseInt(value);
    if(incrDecr<=0){
        incrDecr=1;
        alert("Please enter a positive value")
        return;
    }
})


plusbtn.addEventListener("click",function(){
    let value=parseInt(containervalue.innerText);
    value=value + incrDecr;
    containervalue.innerText=value; 
    // console.log("button is been clicked") 
})

minusbtn.addEventListener("click",function(){
    let value=parseInt(containervalue.innerText)
    value=value - incrDecr;
    if(value<0){
        return;
    }
    containervalue.innerText=value;
})



resetbtn.addEventListener('click',function(){
    containervalue.innerText=0;
    input.value="";
    incrDecr=1;
})

