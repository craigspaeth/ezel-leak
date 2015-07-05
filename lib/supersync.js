var request = require('superagent'),
    Q = require('q');

var METHOD_MAP = {
  'create': 'post',
  'update': 'put',
  'delete': 'del',
  'read': 'get',
  'patch': 'patch'
};

module.exports = function(method, model, options) {
  var url = (options.url ||
    (typeof model.url == 'function' ? model.url() : model.url));
  var data = (options.data ||
    (method === 'create' || method === 'update' ? model.toJSON() : {}));
  // var deferred = Q.defer();
  // var cacheClient = module.exports.cacheClient;
  // var cacheTime = options.cacheTime || module.exports.defaultCacheTime;
  // var cacheKey = url + JSON.stringify(data);
  // var cached = options.cache && cacheClient;

  // Helpers to resolve success/error/complete and to send the request.
  // var success = function(res) {
  //   options.res = { headers: res.headers };
  //   if (options.success) options.success(res.body);
  //   if (options.complete) options.complete(res.body);
  //   deferred.resolve(res.body);
  // }
  // var error = function(err) {
  //   if (options.error) options.error(err);
  //   if (options.complete) options.complete(err);
  //   deferred.reject(err);
  // }
  // var send = function() {
  //   // Allow intercepting of the request object to inject sync-wide things like
  //   // an oAuth token.
  //   var req = request[METHOD_MAP[method]](url);
  //   module.exports.editRequest(req, method, model, options);
  //   // Inject POST/PUT data in body or GET data in querystring
  //   if (method == 'create' || method == 'update') {
  //     req.send(data);
  //   } else {
  //     req.query(data);
  //   }
  //   // Add common Backbone options like `headers`
  //   if (options.headers) {
  //     for(key in options.headers) req.set(key, options.headers[key]);
  //   }
  //   req.timeout(2000).end(function(err, res) {
  //     err ? error(err) : success(res);

  //     // Free memory?
  //     method = null;
  //     model = null;
  //     options = null;
  //     url = null;
  //     data = null;
  //     success = null;
  //     error = null;
  //     send = null;
  //     deferred = null;
  //     req = null;
  //     // cacheClient = null;
  //     // cacheTime = null;
  //     // cacheKey = null;
  //     // cached = null;
  //   });
  //   setTimeout(function () {
  //     if (deferred) deferred = null;
  //   }, 2000);
  // }
  // send();
  // // If cache: true is set then try to retrieve it from cache first.
  // if (cached) {
  //   cacheClient.get(cacheKey, function(err, cachedJSON) {
  //     if (err) {
  //       error(err);
  //     } else if (cachedJSON) {
  //       success(JSON.parse(cachedJSON));
  //     } else {
  //       send();
  //     }
  //   });

  // // Otherwise just send the request.
  // } else {
  //   send();
  // }

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
    success = null;
    error = null;
    send = null;
    deferred = null;
    req = null;
  });
  setTimeout(function () {
    if (deferred) deferred = null;
  }, 2000);

  // Trigger request and return our Q promise
  model.trigger('request', model, {}, options);
  return deferred.promise.timeout(2000);
};

// Used to modify request objects mid-flight
module.exports.editRequest = function(req) {}

// When set will look for the cache: true option in requests and use this client
// to naively cache requests.
module.exports.cacheClient = null
module.exports.defaultCacheTime = 3600
