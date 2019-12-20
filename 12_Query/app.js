var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

//ejs setup
app.set('view engine', 'ejs') ;
//middleware
app.use('/assets', express.static('stuff'));


/* View template engine way EJS */
app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', { qs: req.query });
});

app.get('/profile/:id', function(req, res){
    var data = { age: 29, job: 'ninja', hobbies: [ 'eating', 'fighting', 'fishing'] };
    res.render('profile', { person: req.params.id, data: data }); //file's name inside view folder
});

app.listen(3000);


/* var server = http.createServer( function(req, resp) {
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        resp.writeHead(200, { 'Content-type' : 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(resp);
    }
    else if (req.url === '/contact') {
        resp.writeHead(200, { 'Content-type' : 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(resp);
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

server.listen(3000, '127.0.0.1'); */

console.log('server is running');

