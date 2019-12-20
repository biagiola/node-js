var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello world');
});

//listen port 5000 waiting to say 'Hello world'
app.listen(5000);