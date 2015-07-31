'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('app.teach', {
    url: '/teach',
    templateUrl: 'app/teach/teach.html',
    abstract: true,
    controller: 'TeachCtrl'
  })

  .state('app.teach.history', {
    url: '/history',
    templateUrl: 'app/teach/history/history.html',
    controller: 'TeachHistoryCtrl'
  })

  .state('app.teach.openSessions', {
    url: '/openSessions',
    templateUrl: 'app/teach/openSessions/openSessions.html',
    controller: 'TeachOpenSessionsCtrl'
  })

  .state('app.teach.scheduleClass', {
    url: '/scheduleClass',
    templateUrl: 'app/teach/scheduleClass/scheduleClass.html',
    controller: 'TeachScheduleClassCtrl'
  })

  .state('app.teach.stats', {
    url: '/stats',
    templateUrl: 'app/teach/stats/stats.html',
    controller: 'TeachStatsCtrl'
  });

});