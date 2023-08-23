let arr=[1,2,4,57,8,9,345,12,79,987];

//expected output   [2,4,8,12]

function findeven(num){
    let filterarr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            filterarr.push(arr[i]);
        }
    }
    return filterarr;
}

let answer=findeven(arr);
console.log(arr);
console.log(answer);