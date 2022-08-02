var http = require('http');

http.createServer(function (req, res) {
res.writeHead(200,{'Content-Type': 'text/html'});
res.write(req.url);
res.end();
}).listen(8080);

//http://localhost:8080/apples
//http://localhost:8080/pears
//http://localhost:8080/strawberries