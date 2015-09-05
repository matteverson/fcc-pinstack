'use strict';

angular.module('pinstackApp')
  .service('BoardModel', function ($http) {
    var endpoint = '/api/boards/';

    function getUrl(path) {
      return endpoint + path;
    }

    function get(userId) {
      return $http.get(getUrl(userId));
    }

    function addPin(pin) {
      return $http.post(getUrl(), pin);
    }

    function removePin(pin) {
      return $http.delete(getUrl(pin._id));
    }


    this.get = get;
    this.addPin = addPin;
    this.removePin = removePin;
  });
