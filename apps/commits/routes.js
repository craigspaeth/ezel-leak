//
// Routes file that exports route handlers for ease of testing.
//

var Commits = require('../../collections/commits'),
    request = require('superagent'),
    API_URL = process.env.API_URL,
    supersync = require('../../lib/supersync.js');

exports.index = function(req, res, next) {
  return request
    .get(API_URL + '/repos/artsy/foo/commits')
    .timeout(2000)
    .end(function(err, r) {
      var commits = new Commits(r.body, {
        owner: 'artsy',
        repo: Math.random()
      });
      res.render('index', { commits: commits.models });
    });
  var commits = new Commits(null, {
    owner: 'artsy',
    repo: Math.random()
  });
  commits.sync = supersync;
  commits.fetch({
    success: function() {
      res.render('index', { commits: commits.models });
    },
    error: function(m, err) { res.status(500).send(err); }
  });
};