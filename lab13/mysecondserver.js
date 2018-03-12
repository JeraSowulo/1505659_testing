var http = require('http');
http.createServer(function (req, res) {
var currentdate = require('./mymodule');

 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + currentdate.myDateTime());
 res.end('Wut Hello World!');
}).listen(8080);
