'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('learn', {
    url: '/learn',
    templateUrl: 'app/learn/learn.html',
    abstract: true,
    controller: 'LearnCtrl'
  })

  .state('learnHistoryt', {
    url: '/learn/history',
    templateUrl: 'app/learn/history/history.html',
    controller: 'LearnHistoryCtrl'
  })

  .state('learnMakeRequest', {
    url: '/learn/makeRequest',
    templateUrl: 'app/learn/makeRequest/makeRequest.html',
    controller: 'LearnMakeRequestCtrl'
  })

  .state('learnOpenSessions', {
    url: '/learn/openSessions',
    templateUrl: 'app/learn/openSessions/openSessions.html',
    controller: 'LearnOpenSessionsCtrl'
  })

  .state('learnSearchClasses', {
    url: '/learn/searchClasses',
    templateUrl: 'app/learn/searchClasses/searchClasses.html',
    controller: 'LearnSearchClassesCtrl'
  })

  .state('learnUnanswered', {
    url: '/learn/unanswered',
    templateUrl: 'app/learn/unanswered/unanswered.html',
    controller: 'LearnUnansweredCtrl'
  });

});