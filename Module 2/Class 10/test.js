let radiusofcircle=[1,3,5,6,8,9];
//find the diameter of circle and circumference


function finddiameter(radiusofcircle){
    let diameterarr=[];
    for(let i=0;i<radiusofcircle.length;i++){
        let diameter=2*radiusofcircle[i];
        diameterarr.push(diameter);
    }
    return diameterarr;
}
let diameterofcircle=finddiameter(radiusofcircle);
console.log(radiusofcircle);
console.log(diameterofcircle);


function findcircumference(radiusofcircle){
    let circumferenceofc=[];
    for(let i=0;i<radiusofcircle.length;i++){
        let circum=2*(3.14)*radiusofcircle[i];
        circumferenceofc.push(circum);
    }
    return circumferenceofc;
}

let circumference=findcircumference(radiusofcircle);
console.log("--------------Below here is circumference-----------------------");
console.log(radiusofcircle);
console.log(circumference);

