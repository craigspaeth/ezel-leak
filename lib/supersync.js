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
    err ? error(options, err) : success(options, res);
  });
  model.trigger('request', model, req, options);
}

var success = function(options, res) {
  options.res = { headers: res.headers };
  if (options.success) options.success(res.body);
  if (options.complete) options.complete(res.body);
  options._deferred.resolve(res.body);
}

var error = function(options, err) {
  if (options.error) options.error(err);
  if (options.complete) options.complete(err);
  options._deferred.reject(err);
}

module.exports = function(method, model, options) {
  var url = (options.url ||
    (typeof model.url == 'function' ? model.url() : model.url));
  var data = (options.data ||
    (method === 'create' || method === 'update' ? model.toJSON() : {}));
  var cacheClient = module.exports.cacheClient;
  var cacheTime = options.cacheTime || module.exports.defaultCacheTime;
  var cacheKey = url + JSON.stringify(data);
  var cached = options.cache && cacheClient;
  options._deferred = Q.defer();

  if (cached) {
    cacheClient.get(cacheKey, function(err, cachedJSON) {
      if (err) {
        error(options, err);
      } else if (cachedJSON) {
        success(options, JSON.parse(cachedJSON));
      } else {
        send(method, model, options, url, data);
      }
    });
  } else {
    send(method, model, options, url, data);
  }
  return options._deferred;
};

// Used to modify request objects mid-flight
module.exports.editRequest = function(req) {}

// When set will look for the cache: true option in requests and use this client
// to naively cache requests.
module.exports.cacheClient = null
module.exports.defaultCacheTime = 3600
