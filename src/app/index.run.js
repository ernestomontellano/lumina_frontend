(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .run(function ($rootScope) {
      $rootScope.api = 'http://localhost:8000';
    });
})();
