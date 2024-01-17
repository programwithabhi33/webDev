let fs = require("fs/promises");

let file = fs.readFile("abhi.txt");
file.then(data => console.log(data.toString()))