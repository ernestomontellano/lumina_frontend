(function() {
  'use strict';

  angular
    .module('luminaFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('inicio', {
        url: '/',
        templateUrl: 'app/inicio/inicio.html',
        controller: 'InicioController',
        controllerAs: 'inicio'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
