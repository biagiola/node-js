var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();

//ejs setup - template settings
app.set('view engine', 'ejs') ;

//middleware - serving static files
app.use('/assets', express.static('stuff'));

app.use('/assets', function( req, res, next ){
    console.log('holi: ', req.url);
    next() //next middleware
});

app.get('/', function(req, res){
    //res.send('this is the home page');
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    //res.send('this is the home page');
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req, res){
    res.send('profile id is: ' + req.params.id);
}); 


/* View template engine way EJS */
/* app.get('/', function(req, res){
    //res.send('this is the home page');
    res.render('index');
});

app.get('/contact', function(req, res){
    //res.send('this is the home page');
    res.render('contact');
});

app.get('/profile/:id', function(req, res){
    var data = { age: 29, job: 'ninja', hobbies: [ 'eating', 'fighting', 'fishing'] };
    res.render('profile', { person: req.params.id, data: data }); //file's name inside view folder
}); 

app.listen(3000);

/* createServer promise */
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
}); */

server.listen(3000, '127.0.0.1');

console.log('server is running in port 3000');

