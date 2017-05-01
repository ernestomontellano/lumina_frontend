(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .config(function ($logProvider, localStorageServiceProvider) {
      $logProvider.debugEnabled(false);
      localStorageServiceProvider
        .setPrefix('luminagallery')
        .setStorageType('sessionStorage')
        .setNotify(true, true)
        .setDefaultToCookie(false);
    });
})();
