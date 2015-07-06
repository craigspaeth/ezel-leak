var request = require('superagent'),
    Q = require('q');

var METHOD_MAP = {
  'create': 'post',
  'update': 'put',
  'delete': 'del',
  'read': 'get',
  'patch': 'patch'
};

var send = function (method, model, options, url, data) {
  // Allow intercepting of the request object to inject sync-wide things like
  // an oAuth token.
  var req = request[METHOD_MAP[method]](url);
  module.exports.editRequest(req, method, model, options);
  // Inject POST/PUT data in body or GET data in querystring
  if (method == 'create' || method == 'update') {
    req.send(data);
  } else {
    req.query(data);
  }
  // Add common Backbone options like `headers`
  if (options.headers) {
    for(key in options.headers) req.set(key, options.headers[key]);
  }
  req.timeout(2000).end(function(err, res) {
    err ? options.error(err) : options.success(res.body);
    // Free memory?
    method = null;
    model = null;
    options = null;
    url = null;
    data = null;
    // deferred = null;
    req = null;
    cacheClient = null;
    cacheTime = null;
    cacheKey = null;
    cached = null;
  });
}

module.exports = function(method, model, options) {
  var url = (options.url ||
    (typeof model.url == 'function' ? model.url() : model.url));
  var data = (options.data ||
    (method === 'create' || method === 'update' ? model.toJSON() : {}));
  // var deferred = Q.defer();
  var cacheClient = module.exports.cacheClient;
  var cacheTime = options.cacheTime || module.exports.defaultCacheTime;
  var cacheKey = url + JSON.stringify(data);
  var cached = options.cache && cacheClient;

  send(method, model, options, url, data);
  // Trigger request and return our Q promise
  model.trigger('request', model, {}, options);
  // return deferred.promise.timeout(2000);
};

// Used to modify request objects mid-flight
module.exports.editRequest = function(req) {}

// When set will look for the cache: true option in requests and use this client
// to naively cache requests.
module.exports.cacheClient = null
module.exports.defaultCacheTime = 3600
