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
          controllerAs: 'vminicio'
        })
        .state('fotografos', {
          url: '/fotografos',
          templateUrl: 'app/views/fotografos/fotografos.html',
          controller: 'FotografosController',
          controllerAs: 'vmfotografos'
        })
        .state('fotografo', {
          url: '/fotografo/:id',
          templateUrl: 'app/views/fotografo/fotografo.html',
          controller: 'FotografoController',
          controllerAs: 'vmfotografo'
        })
        .state('galerias', {
          url: '/galerias',
          templateUrl: 'app/views/galerias_tematicas/galerias_tematicas.html',
          controller: 'GaleriasTematicasController',
          controllerAs: 'vmgalerias'
        })
        .state('galeria', {
          url: '/galeria/:id',
          templateUrl: 'app/views/galeria/galeria.html',
          controller: 'GaleriaController',
          controllerAs: 'vmgaleria'
        })
        .state('carrito', {
          url: '/carrito',
          templateUrl: 'app/views/carrito_compras/carrito_compras.html',
          controller: 'CarritoComprasController',
          controllerAs: 'vmcarrito'
        })
        .state('busqueda', {
          url: '/busqueda/:criterio',
          templateUrl: 'app/views/busqueda/busqueda.html',
          controller: 'BusquedaController',
          controllerAs: 'vmbusqueda'
        })
        .state('contacto', {
          url: '/contacto',
          templateUrl: 'app/views/contacto/contacto.html',
          controller: 'ContactoController',
          controllerAs: 'vmcontacto'
        });
      $urlRouterProvider.otherwise('/');
    });
})();
