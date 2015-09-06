'use strict';

angular.module('pinstackApp')
  .controller('MainCtrl', function ($scope, BoardModel) {

    function init() {
        BoardModel.all()
        .success(function (pins) {
          $scope.pins = pins;
        });
    }

    function boardUrl(pin) {
      if (pin.owner) {
        return '../board/' + pin.owner._id;
      }
      else {
        return '/';
      }
    }

    $scope.boardUrl = boardUrl;
    init();
  });
