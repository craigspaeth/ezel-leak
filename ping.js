//
// Pings the app around the rate of Force in production (30 rps)
//

var superagent = require('superagent'),
    async = require('async'),
    APP_URL = process.env.APP_URL;

var fetch = function (callback) {
  async.times(20 + Math.round(Math.random() * 10), function(n, next) {
    superagent.get(APP_URL).end(function (err, res) {
      console.log('.' + err);
      next(err, res);
    });
  }, callback);
}

var recur = function() {
  fetch(function() {
    console.log('--')
    recur();
  });
}

recur();