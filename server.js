'use strict';

var express = require('express');
var routes = require('./app/routes');
var app = express();
var path = require('path');
var port = 8000;

app.set('port', port);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

// Start the app by listening on <port>
app.listen(port, function(){
    console.log('Express app started on port ' + port);
});

