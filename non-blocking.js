var fs = require("fs");

console.log("Starting here !!!")

fs.readFile("sample.txt",function(err,data)
{
    if(err)
    {
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Display after 5 seconds ")
    },5000);

});

console.log("Ending Here !!!")