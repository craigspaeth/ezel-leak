//
// Routes file that exports route handlers for ease of testing.
//

var Commits = require('../../collections/commits'),
    request = require('superagent'),
    API_URL = process.env.API_URL;
// var commits = new Commits(null, {
//   owner: 'artsy',
//   repo: Math.random()
// });

exports.index = function(req, res, next) {
  request
    .get(API_URL + '/repos/artsy/' + Math.random() + '/commits')
    .timeout(2000)
    .end(function(err, sres) {
      if (err) return res.status(500).send(err);
      var commits = new Commits(sres.body, {
        owner: 'artsy',
        repo: Math.random()
      });
      res.render('index', { commits: commits.models });
    });
  // commits.fetch({
  //   success: function() {
  //     res.locals.sd.COMMITS = commits.toJSON();
  //     res.render('index', { commits: commits.models });
  //   },
  //   error: function(m, err) { res.status(500).send(err); }
  // });
};