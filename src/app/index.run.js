(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .run(function ($rootScope, $state) {
      $rootScope.api = 'http://localhost:8000';
      $rootScope.cambiarPagina = function (state, params, reload) {
        $state.go(state, params, reload);
      };
      $rootScope.clicMenu = function (state) {
        $rootScope.cambiarPagina(state, {}, true);
      };
     $rootScope.muestramenu=true;

    });
})();
