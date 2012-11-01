var http = require('http');

http.createServer(function(req, res) {
  res.end('Hello, little PaaS\n');
}).listen(8000);

console.log('Hello world', 8000);
