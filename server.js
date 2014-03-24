'use strict';

//var express = require('express');

//var app = express();

var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Node\n");
});

// Start the app by listening on <port>
var port = 8000;
server.listen(port);
console.log('Express app started on port ' + port);
