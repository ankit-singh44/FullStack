// counst transacitons =[1000,2000,3000,4000,5000,6000]
// counst introUsd= 89;

const transactions =[1000,2000,3000,4000,5000,6000];
const intoUsd=82;

function dollarintorupee(dollar,intousd){
    return dollar/intoUsd;
}


let answer=transactions.map(dollarintorupee);
console.log(answer);