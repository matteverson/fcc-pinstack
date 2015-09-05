'use strict';

angular.module('pinstackApp')
  .controller('BoardCtrl', function ($scope, $stateParams, BoardModel) {

    function init() {
        BoardModel.get($stateParams.userId)
        .success(function (pins) {
          $scope.pins = pins;
        });
    }

    function add(pin) {
      BoardModel.addPin(pin)
      .success(function (pin) {

        init();
      });
    }

    $scope.pins = [];
    $scope.add = add;
    $scope.pin = {};

    init();
  });
