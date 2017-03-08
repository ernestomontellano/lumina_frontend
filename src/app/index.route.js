(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('inicio', {
          url: '/',
          templateUrl: 'app/views/inicio/inicio.html',
          controller: 'InicioController',
          controllerAs: 'inicio'
        });
      $urlRouterProvider.otherwise('/');
    });
})();
