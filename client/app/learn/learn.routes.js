'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('app.learn', {
    url: '/learn',
    templateUrl: 'app/learn/learn.html',
    abstract: true,
    controller: 'LearnCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.learn.history', {
    url: '/history',
    templateUrl: 'app/learn/history/history.html',
    controller: 'LearnHistoryCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.learn.makeRequest', {
    url: '/makeRequest',
    templateUrl: 'app/learn/makeRequest/makeRequest.html',
    controller: 'LearnMakeRequestCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.learn.openSessions', {
    url: '/openSessions',
    templateUrl: 'app/learn/openSessions/openSessions.html',
    controller: 'LearnOpenSessionsCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.learn.searchClasses', {
    url: '/searchClasses',
    templateUrl: 'app/learn/searchClasses/searchClasses.html',
    controller: 'LearnSearchClassesCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.learn.unanswered', {
    url: '/unanswered',
    templateUrl: 'app/learn/unanswered/unanswered.html',
    controller: 'LearnUnansweredCtrl',
    data: {
      authenticate: true
    }
  });

});