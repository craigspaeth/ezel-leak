var async = require('async');
var http = require('http');
var Commits = require('./collections/commits');
var sync = require('./lib/' + process.argv[2] + '.js');
sync.timeout = 60000
Commits.prototype.sync = sync;
http.globalAgent.maxSockets = Number.MAX_VALUE;

var start = process.memoryUsage().heapUsed;
console.log('Start', start);
async.timesLimit(10000, 100, function(n, next) {
  var commits = new Commits([], { owner: 'foo', repo: 'bar' });
  commits.url = 'http://localhost:4000/repos/artsy/bar/commits';
  commits.fetch({ success: function() { next() } });
}, function() {
  console.log('End', process.memoryUsage().heapUsed - start);
});
