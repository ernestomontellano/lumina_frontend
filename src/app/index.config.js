(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .config(function ($logProvider, localStorageServiceProvider) {
      $logProvider.debugEnabled(true);
      localStorageServiceProvider
        .setPrefix('luminagallery')
        .setStorageType('sessionStorage')
        .setNotify(true, true)
        .setDefaultToCookie(false);
    });
})();
