'use strict';

angular.module('helpApp')

.directive('requestHelp', function($http, User) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.on('submit', function() {
        var userId = User.get()._id;
        $http.post('/help', {request: scope.help, user: userId}).then(function(response) {
          console.log('response', response);
        });
      });
    }
  };

});