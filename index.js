//
// Main app file. Loads the .env file, runs setup code, and starts the server.
// This code should be kept to a minimum. Any setup code that gets large should
// be abstracted into modules under /lib.
//

var express = require('express'),
    setup = require('./lib/setup'),
    heapdump = require('heapdump');

var app = module.exports = express();
setup(app);

// Start the server and send a message to IPC for the integration test
// helper to hook into.
app.listen(process.env.PORT, function() {
  console.log('Listening on port ' + process.env.PORT);
  if(process.send) process.send('listening');
});

// Write heapdumps
var i = 0;
var write = function() {
  i++;
  heapdump.writeSnapshot(__dirname + "/public/heapdumps/" + i + ".heapsnapshot");
}
setInterval(write, 1000 * 60);
write();
