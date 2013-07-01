'use strict';

angular.module('directiveExampleApp')
  .directive('albums', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the albums directive');
      }
    };
  });
