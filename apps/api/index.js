//
// Fakes the github api to avoid rate limiting
//

var express = require('express'),
    fixture = require('./fixture.json');

var app = module.exports = express();

app.get('/repos/artsy/:repo/commits', function(req, res, next) {
  setTimeout(function() {
    res.send(fixture)
  }, Math.round(100 + Math.random() * 100));
});
