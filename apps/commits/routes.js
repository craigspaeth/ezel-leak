//
// Routes file that exports route handlers for ease of testing.
//

var Commits = require('../../collections/commits');
Commits.prototype.sync = require('../../lib/supersync4');

exports.index = function(req, res, next) {
  console.log('.')
  var commits = new Commits(null, {
    owner: 'artsy',
    repo: 'flare'
  });
  commits.fetch({
    success: function() {
      res.locals.sd.COMMITS = commits.toJSON();
      res.render('index', { commits: commits.models });
    },
    error: function(m, err) { next(err.text); }
  });
};
