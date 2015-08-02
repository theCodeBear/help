'use strict';

angular.module('helpApp', ['ui.router', 'satellizer', 'angular-jwt'])


.run(function($rootScope, $auth) {

  $rootScope.isLoggedIn = function() {
    return $auth.isAuthenticated();
  };


})



.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('app', {
    abstract: true,
    templateUrl: 'app/nav/nav.html',
    controller: 'NavCtrl'
  })

  .state('app.landing', {
    url: '/',
    templateUrl: 'app/landing/landing.html'
  })

// will get rid of this route
  .state('app.users', {
    url: '/users',
    templateUrl: 'app/users/users.html',
    controller: 'UserCtrl'
  })

  .state('app.account', {
    url: '/account',
    templateUrl: 'app/account/account.html',
    controller: 'AccountCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.chat', {
    url: '/chat',
    templateUrl: 'app/chat/chat.html',
    controller: 'ChatCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.class', {
    url: '/class',
    templateUrl: 'app/class/class.html',
    controller: 'ClassCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.contact', {
    url: '/contact',
    templateUrl: 'app/contact/contact.html',
    controller: 'ContactCtrl'
  })

  .state('app.faq', {
    url: '/faq',
    templateUrl: 'app/faq/faq.html'
  })

  .state('app.notifications', {
    url: '/notifications',
    templateUrl: 'app/notifications/notifications.html',
    controller: 'NotificationsCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.profile', {
    url: '/profile',
    templateUrl: 'app/profile/profile.html',
    controller: 'ProfileCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.register', {
    url: '/register',
    templateUrl: 'app/register/register.html',
    controller: 'RegisterCtrl'
  })

  .state('app.request', {
    url: '/request',
    templateUrl: 'app/request/request.html',
    controller: 'RequestCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.settings', {
    url: '/settings',
    templateUrl: 'app/settings/settings.html',
    controller: 'SettingsCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app.siteStats', {
    url: '/stats',
    templateUrl: 'app/siteStats/siteStats.html',
    controller: 'SiteStatsCtrl'
  });

});
