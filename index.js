//
// Main app file. Loads the .env file, runs setup code, and starts the server.
// This code should be kept to a minimum. Any setup code that gets large should
// be abstracted into modules under /lib.
//

require('newrelic');
var express = require('express'),
    setup = require('./lib/setup'),
    heapdump = require('heapdump'),
    memwatch = require('memwatch-next'),
    http = require('http');

http.globalAgent.maxSockets = Number.MAX_VALUE;

var app = module.exports = express();
setup(app);

// Start the server and send a message to IPC for the integration test
// helper to hook into.
app.listen(process.env.PORT, function() {
  console.log('Listening on port ' + process.env.PORT);
  if(process.send) process.send('listening');
});
