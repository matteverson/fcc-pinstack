'use strict';

angular.module('pinstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('board', {
        url: '/board/:userId',
        templateUrl: 'app/board/board.html',
        controller: 'BoardCtrl'
      });
  });
