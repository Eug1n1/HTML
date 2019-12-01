var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
    var readHtml = fs.createReadStream(__dirname + "/index.html", 'utf8');
    readHtml.pipe(res);
});

server.listen(3000);