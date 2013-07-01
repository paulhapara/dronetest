'use strict';

describe('Directive: albums', function () {
  beforeEach(module('directiveExampleApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<albums></albums>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the albums directive');
  }));
});
