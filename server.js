'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello Node');
});
// Configure our HTTP server to respond with Hello World to all requests.

// Start the app by listening on <port>
var port = 8000;
app.listen(port, function(){
    console.log('Express app started on port ' + port);
});

