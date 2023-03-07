var http = require('http');
var code = 200;
var optionHttp = { 'Content-Type': 'application/json'};
var port = 8080;
var message = "Hello World"

var server = http.createServer((req,res) => {
  res.writeHead(code, optionHttp);
  res.end(message);
});

server.listen(port);
