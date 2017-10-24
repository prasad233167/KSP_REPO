
var express = require('express');
var app = express();
var port = 9090;

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');

app.get("/",function(req,res)
{
    //res.send("This is the home Page !!!");
    res.render('home');
})
app.get("/books",function(req,res)
{
    //res.send("This is a Book page !!!");
    res.render('book');
})

app.listen(port,function(err)
{
    console.log("Custom Server is running on Port 9001");
})

