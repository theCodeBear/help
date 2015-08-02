'use strict';

angular.module('helpApp')

.directive('userLogin', function($state) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.on('submit', function() {
        // need to do jwt login auth stuff, then route to inside of app
        console.log(scope.login);
      });
    }
  };

})


.directive('userSignup', function($auth, $window) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.on('submit', function() {
        // temp check for password, need to actually build in real validation on form
        if (scope.signup.password === scope.signup.password2) {
          $auth.signup({email: scope.signup.email, password: scope.signup.password}).then(function(response) {
            console.log('signup response', response);
            $window.localStorage.setItem('user', JSON.stringify(response.data.user));
          });
        }
      });
    }
  };

})


.directive('userLogout', function($auth, $state, User) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        User.logout();
      });
    }
  };

});