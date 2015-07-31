'use strict';

angular.module('helpApp')

.controller('NavCtrl', function($scope) {

  $scope.isLoggedIn = function() {
    return false;
  }

});