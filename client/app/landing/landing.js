'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html'
  });

});
