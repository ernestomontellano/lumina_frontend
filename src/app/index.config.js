(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .config(function ($logProvider) {
      $logProvider.debugEnabled(true);
    });
})();
