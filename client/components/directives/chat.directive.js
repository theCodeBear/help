'use strict';

angular.module('helpApp')

.directive('sendMessage', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      // this function needs to do socket.io stuff to send message, also push
      // to chat object, and print directly to screen for this user.
      elem.on('submit', function() {
        scope.messages.push(scope.chat.message);
        scope.chat.message = '';
        angular.element('input')[0].focus(true);
      });
    }
  };

})


// scrolling to bottom of page doesn't work yet
.directive('scrollBottom', function($window) {

  return {
    restrict: 'A',
    scope: {
      scrollBottom: "="
    },
    link: function(scope, elem, attrs) {
      scope.$watchCollection('scrollBottom', function (newValue) {
        if (newValue) {
          // console.log('new value');
          // console.log('elem', elem);
          // console.log('scroll', angular.element(elem)[0].scrollHeight);
          // console.log('chatlist height', angular.element('#chatList').css('height'));
          // console.log('textbox scroll', angular.element('#chatMessage').scrollTop());
          // console.log('doc scroll', angular.element(document).scrollTop());
          // angular.element(elem).scrollTop(angular.element(elem)[0].scrollHeight);
          // angular.element(document).scrollTop(angular.element(elem)[0].scrollHeight);
          // console.log('doc height', angular.element(document).height());
          // angular.element($window).scrollTop(angular.element($window).height());
          // console.log('doc final scroll', angular.element(document).scrollTop());
          // console.log(angular.element('#chatList')[0]);
          console.log(angular.element('#chatList').height());
          console.log(angular.element('.chatMessageDisplay').last().offsetParent());
          console.log(angular.element('.chatMessageDisplay').last().offsetHeight);
          var height = angular.element('#chatList').height() - angular.element(document).height();
          console.log('height', height);
          console.log(angular.element($window).scrollTop());
          console.log('window scroll', angular.element($window).scrollTop());
          // angular.element('#chatList').scrollTop(scroll);
          // angular.element("html, body").scrollTop(angular.element(document).scrollTop());
        }
      });
    }
  };

});