'use strict';

angular.module('myApp')

.controller('UserCtrl', function($scope, User) {

  User.getUserNames().then(function(userArray) {
    $scope.userIndex = userArray;
  });

  $scope.submitUser = function(user) {
    User.create(user).then(function(data, status, headers, config) {
      $scope.userIndex = User.mapUsers(data.data.users);
    }).catch(function(data) {
      console.log('error:', data.data);
    }).finally(function() {
      $scope.user.name = '';
      document.getElementsByTagName('input')[0].focus(true);
    });
  };

});