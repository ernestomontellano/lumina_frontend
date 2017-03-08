(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .directive('renderHtml', function ($compile) {
      return function (scope, element, attrs) {
        scope.$watch(
          function (scope) {
            return scope.$eval(attrs.renderHtml);
          },
          function (value) {
            element.html(value);
            $compile(element.contents())(scope);
          }
        );
      };
    });
})();
