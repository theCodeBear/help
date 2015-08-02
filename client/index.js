'use strict';

angular.module('helpApp', ['ui.router', 'satellizer', 'angular-jwt'])


.run(function($rootScope, $state, $auth, $window, jwtHelper) {

  $rootScope.isLoggedIn = function() {
    return $auth.isAuthenticated();
  };

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    // if trying to go to landing page but logged in go to profile instead, LATER ADD IN HERE REGISTRATION PAGE
    if (toState.name === 'app.landing' && $auth.isAuthenticated()) {
      event.preventDefault();
      $state.go('app.profile');
    }

    // if route required authentication
    if (toState.data && toState.data.authenticate) {
      var encodedToken = $window.localStorage.getItem('satellizer_token');
      // if value in localStorage is valid JWT, check if expired
      if (isItJWT(encodedToken)) {
        var expired = jwtHelper.isTokenExpired(encodedToken);
        if (expired) {
          event.preventDefault();
          // here probably automatically renew token.
        }
      } else {
        event.preventDefault();
        $state.go('app.landing');
      }
    }
  });


  // works if there aren't 3 parts to JWT, but if there are other problems an error still thrown
  function isItJWT(encodedJWT) {
    try {
      jwtHelper.decodeToken(encodedJWT);
    } catch(error) {
      console.warn('Error: Invalid token value or missing token. Likely problem: Not Logged In');
      return false;
    }
    return true;
  }


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
