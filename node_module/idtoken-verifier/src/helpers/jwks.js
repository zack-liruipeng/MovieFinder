var urljoin = require('url-join');
var base64 = require('./base64');
var request = require('superagent');

function process(jwks) {
  var modulus = base64.decodeToHEX(jwks.n);
  var exp = base64.decodeToHEX(jwks.e);

  return {
    modulus: modulus,
    exp: exp
  };
}

function getJWKS(options, cb) {
  var url = urljoin(options.iss, '.well-known', 'jwks.json');

  return request
    .get(url)
    .end(function (err, data) {
      if (err) {
        cb(err);
      }

      var matchingKey = null;

      for (var a = 0; a < data.body.keys.length && matchingKey === null; a ++) {
        var key = data.body.keys[a];
        if (key.kid === options.kid) {
          matchingKey = key;
        }
      }

      cb(null, process(matchingKey));
    });
}

module.exports = {
  process: process,
  getJWKS: getJWKS
};
