"use strict";

var app,
    express;

function defineRoutes () {
    // root route
    app.use('/', express.static(__dirname + '/../../dist'));
}

module.exports = {
    use: (a, exp) => {
        // starting up variables
        app = a;
        express = exp;
        
        // initializing routes
        defineRoutes();
    }
}
