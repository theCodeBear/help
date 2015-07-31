'use strict';

angular.module('helpApp')

.config(function($stateProvider) {

  $stateProvider

  .state('teach', {
    url: '/teach',
    templateUrl: 'app/teach/teach.html',
    abstract: true,
    controller: 'TeachCtrl'
  })

  .state('teachHistory', {
    url: '/teach/history',
    templateUrl: 'app/teach/history/history.html',
    controller: 'TeachHistoryCtrl'
  })

  .state('teachOpenSessions', {
    url: '/teach/openSessions',
    templateUrl: 'app/teach/openSessions/openSessions.html',
    controller: 'TeachOpenSessionsCtrl'
  })

  .state('teachScheduleClass', {
    url: '/teach/scheduleClass',
    templateUrl: 'app/teach/scheduleClass/scheduleClass.html',
    controller: 'TeachScheduleClassCtrl'
  })

  .state('teachStats', {
    url: '/teach/stats',
    templateUrl: 'app/teach/stats/stats.html',
    controller: 'TeachStatsCtrl'
  });

});