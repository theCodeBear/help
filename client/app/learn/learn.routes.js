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

  .state('app.learn.historyt', {
    url: '/learn/history',
    templateUrl: 'app/learn/history/history.html',
    controller: 'LearnHistoryCtrl'
  })

  .state('app.learn.makeRequest', {
    url: '/learn/makeRequest',
    templateUrl: 'app/learn/makeRequest/makeRequest.html',
    controller: 'LearnMakeRequestCtrl'
  })

  .state('app.learn.openSessions', {
    url: '/learn/openSessions',
    templateUrl: 'app/learn/openSessions/openSessions.html',
    controller: 'LearnOpenSessionsCtrl'
  })

  .state('app.learn.searchClasses', {
    url: '/learn/searchClasses',
    templateUrl: 'app/learn/searchClasses/searchClasses.html',
    controller: 'LearnSearchClassesCtrl'
  })

  .state('app.learn.unanswered', {
    url: '/learn/unanswered',
    templateUrl: 'app/learn/unanswered/unanswered.html',
    controller: 'LearnUnansweredCtrl'
  });

});