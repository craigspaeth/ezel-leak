//
// Fakes the github api to avoid rate limiting
//

var express = require('express'),
    fixture = require('./fixture');

var app = module.exports = express();

app.get('/repos/artsy/:repo/commits', function(req, res, next) {
  if (Math.random() <= 0.9) {
    setTimeout(function() {
      res.send(fixture());
    }, Math.round(1000 + Math.random() * 1000));
  }
});
