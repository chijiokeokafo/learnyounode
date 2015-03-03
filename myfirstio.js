// var fs = require ('fs')

// var k = fs.readFileSync(process.argv[2]).toString().split('\n').length;

// console.log(k);


// var fs = require('fs')
// var fileName = process.argv[2];
// var fileBuffer = fs.readFileSync(fileName);
// var fileString = fileBuffer.toString();
// var splitString = fileString.split("\n");
// var numLines = splitString.length - 1;
// console.log(numLines);

var fs = require('fs')    
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)