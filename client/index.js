'use strict';

angular.module('helpApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('account', {
    url: '/account',
    templateUrl: 'app/account/account.html',
    controller: 'AccountCtrl'
  })

  .state('chat', {
    url: '/chat',
    templateUrl: 'app/chat/chat.html',
    controller: 'ChatCtrl'
  })

  .state('class', {
    url: '/class',
    templateUrl: 'app/class/class.html',
    controller: 'ClassCtrl'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'app/contact/contact.html',
    controller: 'ContactCtrl'
  })

  .state('faq', {
    url: '/faq',
    templateUrl: 'app/faq/faq.html'
  })

  .state('notification', {
    url: '/notification',
    templateUrl: 'app/notification/notification.html',
    controller: 'NotificationCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'app/profile/profile.html',
    controller: 'ProfileCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'app/register/register.html',
    controller: 'RegisterCtrl'
  })

  .state('request', {
    url: '/request',
    templateUrl: 'app/request/request.html',
    controller: 'RequestCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'app/settings/settings.html',
    controller: 'SettingsCtrl'
  });

});
