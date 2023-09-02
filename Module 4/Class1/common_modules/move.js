const path = require("path");

const fs=require("fs");

let srcPath= "C:\Users\Admin\Desktop\Fullstack\Module 4\common_modules\myDirectory\file.md"


let destDirectory = "C:\Users\Admin\Desktop\Fullstack\Module 4\common_modules\myDirectory2"


// to find the basename Here the o/p is: file.md
let baseNameOfFieldToBeCopied = path.basename(srcPath);

console.log(baseNameOfFieldToBeCopied);

// let desPath= destDirectory + "" +baseNameOfFieldToBeCopied;

let desPath =path.join(destDirectory,baseNameOfFieldToBeCopied);

console.log(desPath);

fs.copyFileSync(srcPath,desPath);
