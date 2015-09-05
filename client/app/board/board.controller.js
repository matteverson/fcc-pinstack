'use strict';

angular.module('pinstackApp')
  .controller('BoardCtrl', function ($scope, $stateParams, BoardModel) {
    $scope.pins = [];

    function init() {
        BoardModel.get($stateParams.userId)
        .success(function (pins) {
          $scope.pins = pins;
        });
    }

    init();
  });
