'use strict';

angular.module('pinstackApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
  Auth.isLoggedInAsync(function(result) {
      $scope.isLoggedIn = result;
      $scope.isAdmin = Auth.isAdmin();
      $scope.getCurrentUser = Auth.getCurrentUser();
  });

  $scope.logout = function() {
    Auth.logout();
    $location.path('/');
  };

  $scope.goToMyBoard = function() {
      $scope.go('/board/' + Auth.getCurrentUser()._id);
  };

  $scope.getTitle = function() {
      switch($location.path()) {
      case '/login':
        return 'Log in';
      case '/signup':
        return 'Register';
      case '/settings':
        return 'Settings';
      case '/':
        return 'Pinstack';
      default:
        return 'Pinstack';
      }
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.go = function(path) {
    $location.path(path);
  };
});
