'use strict';

angular.module('pinstackApp')
  .service('BoardModel', function ($http) {
    var endpoint = '/api/pins/';

    function getUrl(path) {
      return endpoint + path;
    }

    function all() {
      return $http.get(endpoint);
    }

    function get(userId) {
      return $http.get(getUrl('user/' + userId));
    }

    function addPin(pin) {
      return $http.post(endpoint, pin);
    }

    function removePin(pin) {
      return $http.delete(getUrl(pin._id));
    }

    this.all = all;
    this.get = get;
    this.addPin = addPin;
    this.removePin = removePin;
  });
