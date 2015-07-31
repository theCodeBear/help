'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('app.learn', {
    url: '/learn',
    templateUrl: 'app/learn/learn.html',
    abstract: true,
    controller: 'LearnCtrl'
  })

  .state('app.learn.history', {
    url: '/history',
    templateUrl: 'app/learn/history/history.html',
    controller: 'LearnHistoryCtrl'
  })

  .state('app.learn.makeRequest', {
    url: '/makeRequest',
    templateUrl: 'app/learn/makeRequest/makeRequest.html',
    controller: 'LearnMakeRequestCtrl'
  })

  .state('app.learn.openSessions', {
    url: '/openSessions',
    templateUrl: 'app/learn/openSessions/openSessions.html',
    controller: 'LearnOpenSessionsCtrl'
  })

  .state('app.learn.searchClasses', {
    url: '/searchClasses',
    templateUrl: 'app/learn/searchClasses/searchClasses.html',
    controller: 'LearnSearchClassesCtrl'
  })

  .state('app.learn.unanswered', {
    url: '/unanswered',
    templateUrl: 'app/learn/unanswered/unanswered.html',
    controller: 'LearnUnansweredCtrl'
  });

});