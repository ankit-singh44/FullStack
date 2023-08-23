const fs=require("fs");

// console.log(fs);

// we are going to Read, Write, Update and delete a file using fs module

// fs.writeFileSync("demo.txt","Hi I am demo file data update");


// let contentOfFileOne =fs.readFileSync("demo.txt");
// console.log(contentOfFileOne+"");

// fs.writeFileSync("demo2.txt","Hi I am second demo file data ");

// let contentOfFileOnes =fs.readFileSync("demo2.txt");
// console.log(contentOfFileOnes+"");


// fs.appendFileSync("demo2.txt","which is updated");

// fs.unlinkSync("file2.txt");


// To creating and delete  the directory

// fs.mkdirSync("myDirectory");

// fs.mkdirSync("myDirectory2");


// check if any file or directory is exist or not 


if(!fs.existsSync("myDirectory")){
    fs.mkdirSync("myDirectory");
}

if(!fs.existsSync("myDirectory2")){
    fs.mkdirSync("myDirectory2");
}

// let doesExist=fs.existsSync("myDirectory3");

// console.log(doesExist);


// TO delete any directory

// fs.rmdirSync("myDirectory2");
