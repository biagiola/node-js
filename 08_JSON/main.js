var http = require('http');
var fs = require('fs')

var server = http.createServer( function(req, resp){
    console.log('request was made: ' + req.url);
    resp.writeHead(200, { 'Content-Type' : 'application/json' });
    var myObj = {
        name: 'David',
        job: 'programmer',
        age: 25
    };
    //.end espera un string o un buffer siempre
    resp.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('server is running...');
