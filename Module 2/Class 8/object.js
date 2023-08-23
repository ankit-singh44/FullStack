// objects are like key value pair
//initialized the obj
// let obj ={};


// let person={
//     name:"Aman",
//     age:12,
//     phone:12345,
//     isMale: true
// }

// console.log(person);

//dot notation - in this whatever we write after dot is treated as string
// console.log(person.name);
// console.log(person.age);

// //bracket notation

// console.log(person["name"]);

let captainAmerice={
    name: "Steve Rogers",
    age:9999,
    friends: ["Bucky","Tony","Natasha","Thor","Bruce"],
    sayHi:function(){
        console.log("Steves say Hi!");
    },
    address: {
        country:"USA",
        city:{
            state: "Arizona",
            pincode: 12345
        }
    },
    isAverage: false
}
console.log(captainAmerice.age);
console.log(captainAmerice["age"]);

//print bucky
console.log(captainAmerice.friends[0]);
console.log(captainAmerice["friends"][0]);

//print state  
console.log(captainAmerice.address);
console.log(captainAmerice.address.city);
console.log(captainAmerice.address.city.state);


console.log(captainAmerice);
captainAmerice.isAverage=true;
console.log(captainAmerice);



//update the object

captainAmerice.movies=["First Avenger","Civil war"];

console.log(captainAmerice);

captainAmerice.sayHi();


// delete from object
delete captainAmerice.age;
console.log(captainAmerice);

// update 