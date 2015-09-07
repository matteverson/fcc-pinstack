'use strict';

angular.module('pinstackApp')
  .controller('AddPinDialogCtrl', function AddPinDialogCtrl ($scope, $mdDialog) {
    $scope.pin = {};

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(form) {
      if (form.$valid) {
        $mdDialog.hide($scope.pin);
      }
    };
  })
  .controller('BoardCtrl', function ($scope, $stateParams, BoardModel, $mdDialog, Auth) {

    function init() {
        BoardModel.get($stateParams.userId)
        .success(function (pins) {
          $scope.pins = pins;
          $('.grid').masonry({
            columnWidth: 200,
            itemSelector: '.grid-item'
          });
        });
    }

    function remove(pin) {
      BoardModel.removePin(pin)
      .success(function() {
        init();
      });
    }

    function add(pin) {
      BoardModel.addPin(pin)
      .success(function() {
        init();
      });
    }

    function toggleOverlay(pin) {
      if (Auth.isLoggedIn()) {
        var i = $scope.pins.indexOf(pin);
        $scope.pins[i].showOverlay = !$scope.pins[i].showOverlay;
      }
    }

    function openForm(ev) {
      $mdDialog.show({
        controller: 'AddPinDialogCtrl',
        templateUrl: 'app/board/addpin.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
      .then(function(pin) {
          add(pin);
      }, function() {
        // Dialog was cancelled
      });
    }

    $scope.pins = [];
    $scope.pin = {};
    $scope.add = add;
    $scope.remove = remove;
    $scope.toggleOverlay = toggleOverlay;
    $scope.openForm = openForm;
    $scope.isLoggedIn = Auth.isLoggedIn();

    init();
  });
