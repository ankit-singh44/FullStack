const a=[1,2,3,4,5];
a.push(6);
console.log(a);
a.pop();
console.log(a);




// Pass by value --> A new copy will br created, no changes in the original one

function fxn(num,obj){
    console.log(num);
    console.log(obj);
}

let b=10;
let c={
    name:"Ankit"
}

console.log(b);
fxn(b,c);
console.log(b);