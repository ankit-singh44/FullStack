const path = require("path");

let srcPath= "C:\Users\Admin\Desktop\Fullstack\Module 4\common_modules\myDirectory\file.md"


let destDirectory = "C:\Users\Admin\Desktop\Fullstack\Module 4\common_modules\myDirectory2"

let baseNameOfFieldToBeCopied = path.basename(srcPath);

console.log(baseNameOfFieldToBeCopied);

let desPath= destDirectory + "/" +baseNameOfFieldToBeCopied;

console.log(desPath);


