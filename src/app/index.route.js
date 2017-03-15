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
        })
        .state('fotografos', {
          url: '/fotografos',
          templateUrl: 'app/views/fotografos/fotografos.html',
          controller: 'FotografosController',
          controllerAs: 'fotografos'
        })
        .state('fotografo', {
          url: '/fotografo',
          templateUrl: 'app/views/fotografo/fotografo.html',
          controller: 'FotografoController',
          controllerAs: 'fotografo'
        });
      $urlRouterProvider.otherwise('/');
    });
})();
