(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .run(function ($rootScope, $state, $log, $window) {
      // $rootScope.api = 'http://localhost:8000';
      $rootScope.api = 'http://luminaapi.lumina.gallery';
      $rootScope.carroDeCompras = new Array();
      $rootScope.carroDeComprasCant = 0;
      $rootScope.carroDeComprasBs = 0;
      $rootScope.carroDeComprasSus = 0;
      $rootScope.$watchCollection('carroDeCompras', function () {
        $rootScope.carroDeComprasCant = 0;
        $rootScope.carroDeComprasBs = 0;
        $rootScope.carroDeComprasSus = 0;
        for (var t = 0; t < $rootScope.carroDeCompras.length; t++) {
          $rootScope.carroDeComprasCant += $rootScope.carroDeCompras[t].cantidad;
          $rootScope.carroDeComprasBs += $rootScope.carroDeCompras[t].totalbs;
          $rootScope.carroDeComprasSus += $rootScope.carroDeCompras[t].totalsus;
        }
      });
      $rootScope.cambiarPagina = function (state, params, reload) {
        $state.go(state, params, reload);
      };
      $rootScope.clicMenu = function (state) {
        $rootScope.cambiarPagina(state, {}, true);
        $rootScope.muestra_cont = false;
      };
      $rootScope.mostrarFotografo = function (id) {
        var parametros = {
          id: id
        }
        $rootScope.cambiarPagina('fotografo', parametros, true);
      };
      $rootScope.mostrarGaleria = function (id) {
        var parametros = {
          id: id
        }
        $rootScope.cambiarPagina('galeria', parametros, true);
      };
      $rootScope.flg = 0;
      angular.element(window).resize(function () {
        if ($window.innerWidth < 768) {
          $log.debug("es menor");
          $rootScope.muestra_cont = false;
        } else {
          $log.debug("es mayor");
          $rootScope.muestra_cont = true;
        }
      });
      $rootScope.muestraMenu = function () {
        if ($rootScope.flg == 0) {
          $rootScope.flg = 1;
          $rootScope.muestra_cont = true;
        } else if ($rootScope.flg == 1) {
          $rootScope.flg = 0;
          $rootScope.muestra_cont = false;
        }
      }
    });
})();
