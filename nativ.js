var http = require("http");
var server = http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("First Server Program");
}
)

server.listen(9000);
console.log("Server Started Running !!!");
