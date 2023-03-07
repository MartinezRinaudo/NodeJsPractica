let http = require('http');
let code = 200;
let optionHttp = { 'Content-Type': 'application/json'};
let port = 8080;
let message = "Hello World"

let server = http.createServer((req,res) => {
  res.writeHead(code, optionHttp);
  res.write(req.url);
  res.end(message);
});

server.listen(port);