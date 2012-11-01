var http = require('http');

http.createServer(function(req, res) {
  res.end('Hello, this is node.js!\n');
}).listen(8000);

console.log('Hello world', 8000);
