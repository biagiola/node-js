var http = require('http');

var server = http.createServer( function(req, resp) {
    console.log('request was made: ' + req.url);
    //primer parametro es el status, puede ser un json en vez de plain
    resp.writeHead(200, { 'Content-type': 'text/plain' });
    resp.end('lo qui tah');
});

server.listen(3000, '127.0.0.1');
console.log('server working...');