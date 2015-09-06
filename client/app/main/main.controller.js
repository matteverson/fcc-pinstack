'use strict';

angular.module('pinstackApp')
  .controller('MainCtrl', function ($scope, BoardModel) {

    function init() {
        BoardModel.all()
        .success(function (pins) {
          $scope.pins = pins;
        });
    }

    init();
  });
