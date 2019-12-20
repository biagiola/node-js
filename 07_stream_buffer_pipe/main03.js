/* the same of main01 and main 02 sending to the client (127.0.0.1:3000)*/
var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, resp) {
    console.log('request was made: ' + req.url);
    resp.writeHead(200, { 'Content-type' : 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(resp);
});

server.listen(3000, '127.0.0.1');
console.log('server localhost:3000 is running');



