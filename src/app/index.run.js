(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .run(function ($rootScope, $state, $log, $window, localStorageService) {
      $rootScope.api = 'http://lumina.gallery/lumback';
      $rootScope.criterioBusqueda = '';
      $rootScope.carroDeCompras = new Array();
      $rootScope.carroDeComprasDatos = new Array();
      if (JSON.parse(localStorageService.get("cart"))) {
        $rootScope.carroDeCompras = JSON.parse(localStorageService.get("cart"));
        $rootScope.carroDeComprasDatos = JSON.parse(localStorageService.get("cartdata"));
      } else {
        $rootScope.carroDeComprasDatos = {
          nombre: '',
          pais: '',
          ciudad: '',
          direccion: '',
          telefono: '',
          infoadicional: '',
          zona: 0,
          elementos: 0,
          bs: 0,
          sus: 0
        };
        localStorageService.set("cart", JSON.stringify($rootScope.carroDeCompras));
        localStorageService.set("cartdata", JSON.stringify($rootScope.carroDeComprasDatos));
      }
      $rootScope.$watchCollection('carroDeCompras', function () {
        $log.debug('carroDeCompras', $rootScope.carroDeCompras);
        $rootScope.carroDeComprasDatos = {
          elementos: 0,
          bs: 0,
          sus: 0
        };
        for (var t = 0; t < $rootScope.carroDeCompras.length; t++) {
          $rootScope.carroDeComprasDatos.elementos += $rootScope.carroDeCompras[t].cantidad;
          $rootScope.carroDeComprasDatos.bs += $rootScope.carroDeCompras[t].totalbs;
          $rootScope.carroDeComprasDatos.sus += $rootScope.carroDeCompras[t].totalsus;
        }
        localStorageService.set("cart", JSON.stringify($rootScope.carroDeCompras));
        localStorageService.set("cartdata", JSON.stringify($rootScope.carroDeComprasDatos));
      });
      $rootScope.cambiarPagina = function (state, params, reload) {
        $state.go(state, params, reload);
      };
      $rootScope.clicMenu = function (state) {
        $rootScope.cambiarPagina(state, {}, true);
      };
      $rootScope.muestraBusqueda = function () {
        $rootScope.busca = true;
      };
      $rootScope.buscar = function (criterio) {
        $rootScope.cambiarPagina('busqueda', {criterio: criterio}, true);
        $rootScope.busca = false;
      };
      $rootScope.enviarTeclado = function (keyEvent, cribus) {
        if (keyEvent.which === 13) {
          $rootScope.buscar(cribus);
        }
      };
      $rootScope.mostrarFotografo = function (id) {
        var parametros = {
          id: id
        };
        $rootScope.cambiarPagina('fotografo', parametros, true);
      };
      $rootScope.mostrarGaleria = function (id) {
        var parametros = {
          id: id
        }
        $rootScope.cambiarPagina('galeria', parametros, true);
      };
      //  $rootScope.flg = 0;
      /* angular.element(window).resize(function () {
       if ($window.innerWidth < 768) {
       $log.debug("es menor");
       // $rootScope.muestra_cont = false;
       } else {
       $log.debug("es mayor");
       $rootScope.muestra_cont = true;
       }
       });*/
      /* $rootScope.muestra_cont=true;
       $rootScope.muestraMenu = function () {
       if ($rootScope.flg == 0) {
       $rootScope.flg = 1;
       $rootScope.muestra_cont = true;
       } else if ($rootScope.flg == 1) {
       $rootScope.flg = 0;
       $rootScope.muestra_cont = false;
       }
       }*/
    });
})();
