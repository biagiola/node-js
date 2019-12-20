var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, resp) {

    console.log('request was made: ' + req.url);
    // matching the user url coming from the browser.
    if (req.url === '/home' || req.url === '/') {
        resp.writeHead(200, { 'Content-type' : 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(resp);
    }
    else if (req.url === '/contact') {
        resp.writeHead(200, { 'Content-type' : 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(resp);
    }
    else if (req.url === '/about') {
        resp.writeHead(200, { 'Content-type' : 'text/html' });
        fs.createReadStream(__dirname + '/about.html').pipe(resp);
    }
    else if ( req.url === '/api/users') {
        var user = [{ name: 'David', age: 25 }, { name: 'Jorge', age: 24}, { name: 'Ricardo', age: 24}];
        resp.writeHead(200, { 'Content-type' : 'application/json' });
        resp.end(JSON.stringify(user));
    } else {
        resp.writeHead( 404, { 'Content-type' : 'text/html' } );
        fs.createReadStream(__dirname + '/404.html').pipe(resp);
    }

});

server.listen(3000, '127.0.0.1');
console.log('server is running');