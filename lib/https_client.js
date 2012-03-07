(function() {
  var EventEmitter, HttpClient, HttpsClient, https,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  https = require('https');

  HttpClient = require('./http_client');

  EventEmitter = require('events').EventEmitter;

  HttpsClient = (function(_super) {

    __extends(HttpsClient, _super);

    function HttpsClient(options) {
      options.http = options.http || https;
      HttpsClient.__super__.constructor.call(this, options);
    }

    return HttpsClient;

  })(HttpClient);

  module.exports = HttpsClient;

}).call(this);