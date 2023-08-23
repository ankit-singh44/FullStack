console.log("Hello world from node js");

//number
let num=10;
console.log(num);

//int value
let a=10.5;
console.log(a);

//character
let char='z';
console.log(char);
//string
let str="Hello everyone once again";
console.log(str);

//boolean
let b=false;
console.log(b);

// for loop
for(let i=0;i<10;i++){
    console.log(i);
}

// while loop condition
let count=10;
while(count>0){
    console.log(count);
    count--;
}
 // if condition
 let p=12, q=11;
 if(p>q){
    console.log("p is greater");
 }
 else{
    console.log("q is greater");
 }

 let n=5;
 let flag=0;
 for(let i=2;i<n;i++){
    if(n%i==0){
        flag=1;
    }
 }
 if(flag==1){
    console.log("number is not prime");
 }
 else{
    console.log("Number is prime");
 }