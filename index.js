var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('This is docker test!');
});

app.listen(8080);
console.log('Application is running on port:8080');
