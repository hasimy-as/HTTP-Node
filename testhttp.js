//http module
const http = require('http');

//create server function
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Halo Dunia!');
    res.end();
  }).listen(8080);

//console output
console.log('Aplikasi berjalan!');
