'use strict';

angular.module('helpApp')

.controller('ChatCtrl', function($scope, socket) {

  $scope.messages = [];


  socket.on('user connected', function(msg) {
    console.log(msg);
  });

});