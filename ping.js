//
// Pings the app around the rate of Force in production (30 rps)
//

var superagent = require('superagent'),
    async = require('async'),
    APP_URL = process.env.APP_URL;

var fetch = function (callback) {
  async.times(500 + Math.round(Math.random() * 500), function(n, next) {
    superagent
      .get(APP_URL)
      .timeout(7000)
      .end(function (err, res) {
        console.log('.' + err);
        next(err, res);
      });
  }, callback);
}

setInterval(fetch, 10000);