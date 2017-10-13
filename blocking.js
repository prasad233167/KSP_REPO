var fs = require("fs");
var data = fs.readFileSync("sample.txt");
console.log("Program Starts Here !!!")
console.log("Output is: "+data.toString());
console.log("Ends Here !!!");