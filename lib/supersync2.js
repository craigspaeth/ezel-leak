var http = require('http');
var u = require('url');
var Promise = require('bluebird');
var qs = require('querystring');

var METHOD_MAP = {
  'create': 'post',
  'update': 'put',
  'delete': 'del',
  'read': 'get',
  'patch': 'patch'
};

// Main exported sync function. Returns a Q promise to mimic Backbone + jQuery,
// if using the built in cache support it will check the cache for data or send
// off the HTTP request.
//
// @param {Function} method
// @param {Object} model
// @param {Object} options
// @return {Object} A Q promise to mimc how Backbone work with jQuery

module.exports = function(method, model, options) {
  var cacheKey = urlDataCacheKey(method, model, options)[2];
  return new Promise(function(resolve, reject) {
    if (options.cache && module.exports.cacheClient) {
      module.exports.cacheClient.get(cacheKey, function(err, cachedJSON) {
        if (err) {
          error(options, err, reject);
        } else if (cachedJSON) {
          success(options, JSON.parse(cachedJSON), resolve);
        } else {
          send(method, model, options, resolve, reject);
        }
      });
    } else {
      send(method, model, options, resolve, reject);
    }
  });
};

// Helper to compute the requesting url, params, and cache key based off those
// two. Used when sending a new http request or determing the cache key to read.
//
// @param {Function} method
// @param {Object} model
// @param {Object} options
// @return {Array} Array of [url, data, cacheKey]

var urlDataCacheKey = function(method, model, options) {
  var url = (options.url ||
    (typeof model.url == 'function' ? model.url() : model.url));
  var data = (options.data ||
    (method === 'create' || method === 'update' ? model.toJSON(options) : {}));
  var cacheKey = url + JSON.stringify(data);
  return [url, data, cacheKey];
}

// Builds and sends the actual http request. This reflects the guts of the
// default Backbone.sync logic.
//
// @param {Function} method
// @param {Object} model
// @param {Object} options
// @param {Function} resolve Deferred resolve
// @param {Function} reject  Deferred reject

var send = function (method, model, options, resolve, reject) {
  var url = urlDataCacheKey(method, model, options)[0];
  var data = urlDataCacheKey(method, model, options)[1];
  var cacheKey = urlDataCacheKey(method, model, options)[2];
  var timeout;
  // Bare convoluted HTTP code for performance
  var headers = (options.headers || {});
  if (method == 'create' || method == 'update') {
    var body = JSON.stringify(data);
    headers['Content-Length'] = body.length;
    headers['Content-Type'] = 'application/json';
  }
  var p = u.parse(url);
  var path = p.path;
  if (method == 'read' || method == 'delete') path += '?' + qs.stringify(data);
  var opts = {
    hostname: p.hostname,
    port: p.port,
    path: path,
    method: METHOD_MAP[method],
    headers: headers
  };
  var d = '';
  var req = http.request(opts, function(res) {
    res.setEncoding('utf8');
    if (res.statusCode >= 400) return error(options, res, reject);
    res.on('data', function (chunk) {
      d += chunk.toString();
    });
    res.on('end', function() {
      var r = { headers: res.headers, body: JSON.parse(d) };
      clearTimeout(timeout);
      // Save result in cache
      if (options.cache && module.exports.cacheClient) {
        module.exports.cacheClient.set(cacheKey, JSON.stringify({
          body: r.body,
          headers: r.headers
        }));
        module.exports.cacheClient.expire(cacheKey,
          (options.cacheTime || module.exports.defaultCacheTime));
      }
      success(options, r, resolve);
    });
  })

  req.on('error', function(err) {
    error(options, err, reject);
  });
  if (method == 'create' || method == 'update') req.write(body);
  req.end();
  timeout = setTimeout(req.abort, options.timeout || module.exports.timeout);
}

// DRYs up resolving the callbacks and deferreds for a successful response,
// whether that's from the cache or a resolved http request.
//
// @param {Object} options Backbone options
// @param {Object} res A response object with { body: {}, headers: {} }
// @param {Function} resolve Deferred resolve

var success = function(options, res, resolve) {
  // Resolve
  options.res = { headers: res.headers };
  if (options.success) options.success(res.body);
  if (options.complete) options.complete(res.body);
  resolve(res.body);
}

// DRYs up resolving the callbacks and deferreds for an unsuccessful response,
// whether that's from the cache or a resolved http request.
//
// @param {Object} options Backbone options
// @param {Object} err
// @param {Function} reject  Deferred reject

var error = function(options, err, reject) {
  if (options.error) options.error(err);
  if (options.complete) options.complete(err);
  reject(err);
}

// Configuration that can be overwritten by the user. Includes a optional
// cache client library integration, default cache expiry, and
// the default timeout for a sent http request.

module.exports.cacheClient = null;
module.exports.defaultCacheTime = 3600;
module.exports.timeout = 10000;
