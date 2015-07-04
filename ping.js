//
// Pings the app around the rate of Force in production (30 rps)
//

var superagent = require('superagent'),
    async = require('async'),
    APP_URL = process.env.APP_URL;

var fetch = function (callback) {
  async.times(400 + Math.round(Math.random() * 400), function(n, next) {
    console.log('+');
    setTimeout(function() {
      console.log('-');
      superagent
        .get(APP_URL)
        .timeout(3000)
        .end(function (err, res) {
          console.log('.' + err);
          next(err, res);
        });
    }, Math.random() * 5000);
  }, callback);
}

setInterval(fetch, 5000);