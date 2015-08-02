'use strict';

angular.module('helpApp')

.factory('User', function($http, $q, $window, $auth, $state) {

  var _user = {};

  var service = {
    login: login,
    logout: logout,
    store: store,
    get: get
  };

  return service;

  // returns a promise with user info and token
  function login(creds) {
    return $auth.login(creds);
  }

  function logout() {
    $auth.logout();
    $window.localStorage.removeItem('user');
    $state.go('app.landing');
  }

  function store(user) {
    _user = user;
  }

  function get() {
    return _user;
  }


// // return a promise with all the user data in the database
//   function get() {
//     return $http.get('/users');
//   }

// // return a promise with an array of all user names from the database
//   function getUserNames() {
//     var deferred = $q.defer();
//     get().then(function(data) {
//       deferred.resolve(mapUsersToNames(data.data.users));
//     });
//     return deferred.promise;
//   }

// // return a promise after with array of all user data from the
// // database after posting a new user to the database
//   function create(user) {
//     return $http.post('/users', user);
//   }

// // take array of user data from DB, map it to an array of only
// // the users' names and return this array
//   function mapUsersToNames(users) {
//     return users.map(function(user) {
//       return user.name;
//     });
//   }

// // expose public API for this service
//   return {
//     get: get,
//     getUserNames: getUserNames,
//     create: create,
//     mapUsersToNames: mapUsersToNames
//   };

});