//
// Routes file that exports route handlers for ease of testing.
//

var Commits = require('../../collections/commits');
// var commits = new Commits(null, {
//   owner: 'artsy',
//   repo: Math.random()
// });

exports.index = function(req, res, next) {
  setTimeout(function() {
    res.render('index', { commits: [] });
  }, Math.round(500 + Math.random() * 1000));
  // commits.fetch({
  //   success: function() {
  //     res.locals.sd.COMMITS = commits.toJSON();
  //     res.render('index', { commits: commits.models });
  //   },
  //   error: function(m, err) { res.status(500).send(err); }
  // });
};