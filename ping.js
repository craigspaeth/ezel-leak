//
// Pings the app around the rate of Force in production (30 rps)
//

var superagent = require('superagent'),
    async = require('async'),
    APP_URL = process.env.APP_URL;

var fetch = function (callback) {
  async.times(200 + Math.round(Math.random() * 200), function(n, next) {
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
setTimeout(process.exit, 1000 * 60 * 60 * 10)