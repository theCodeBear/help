'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('app.teach', {
    url: '/teach',
    templateUrl: 'app/teach/teach.html',
    abstract: true,
    controller: 'TeachCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.teach.history', {
    url: '/history',
    templateUrl: 'app/teach/history/history.html',
    controller: 'TeachHistoryCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.teach.openSessions', {
    url: '/openSessions',
    templateUrl: 'app/teach/openSessions/openSessions.html',
    controller: 'TeachOpenSessionsCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.teach.scheduleClass', {
    url: '/scheduleClass',
    templateUrl: 'app/teach/scheduleClass/scheduleClass.html',
    controller: 'TeachScheduleClassCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.teach.stats', {
    url: '/stats',
    templateUrl: 'app/teach/stats/stats.html',
    controller: 'TeachStatsCtrl',
    data: {
      authenticate: true
    }
  });

});