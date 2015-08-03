'use strict';

angular.module('helpApp')

.directive('studentRegister', function(User) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        console.log('signed up as student');
        var userId = User.getId();
        // this will eventually be done during stripe registration, or in reality for free startup this needs to be done with a time stamp which expires and then done through stripe registration
        User.registerAsStudent({lengthOfFree: 180, userId: userId}).then(function(response) {
          console.log('registered', response);
          User.store(response.data.user);
          User.updateLocalStorageUser(response.data.user);
        });
      });
    }
  };

});