"use strict";

var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

// paths
require('./routes.js').use(app, express);

// starting the server
server.listen(8081, () => console.log('Server started listening at 8081...'));