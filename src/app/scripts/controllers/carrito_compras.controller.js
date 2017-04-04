(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('CarritoComprasController', function () {
      var vm = this;
      vm.comprados = [
        {nombre: "Ejemplo de fotografía"},
        {nombre: "Otro Ejemplo"},
        {nombre: "SDK-3234"}
      ];
    })
    .controller('CarritoComprasModalController', function ($rootScope, $log, $modalInstance, elemento) {
        var vm = this;
        vm.imagenCarro = elemento;
        vm.tamanhoTemp = '0';
        vm.elementoAgregado = 0;
        $log.debug('imagenCarro', vm.imagenCarro);
        var etiquetasTemp = '';
        for (var e = 0; e < vm.imagenCarro.etiquetas.length; e++) {
          if (e > 0) {
            etiquetasTemp += ', ';
          }
          etiquetasTemp += vm.imagenCarro.etiquetas[e].etiqueta
        }
        vm.carroCompra = {
          id: vm.imagenCarro.id,
          nombre: vm.imagenCarro.nombre,
          codigo: vm.imagenCarro.codigo,
          imagen: vm.imagenCarro.imagen,
          etiquetas: etiquetasTemp,
          fotografo: '',
          tamanhos_id: 0,
          tamanho: '',
          preciobs: 0,
          preciosus: 0,
          totalbs: 0,
          totalsus: 0,
          disponible: 0,
          cantidad: 1
        };
        $log.debug('carroCompra', vm.carroCompra);
        vm.asignarImagenDisponible = function () {
          if (vm.tamanhoTemp != '0') {
            var temp = vm.tamanhoTemp.split('//');
            vm.carroCompra.tamanhos_id = Number(temp[0]);
            vm.carroCompra.tamanho = temp[1];
            vm.carroCompra.preciobs = Number(temp[2]);
            vm.carroCompra.preciosus = Number(temp[3]);
            vm.carroCompra.totalbs = vm.carroCompra.preciobs * vm.carroCompra.cantidad;
            vm.carroCompra.totalsus = vm.carroCompra.preciosus * vm.carroCompra.cantidad;
            vm.carroCompra.disponible = Number(temp[4]);
          } else {
            vm.carroCompra.tamanhos_id = 0;
            vm.carroCompra.tamanho = '';
            vm.carroCompra.preciobs = 0;
            vm.carroCompra.preciosus = 0;
            vm.carroCompra.totalbs = 0;
            vm.carroCompra.totalsus = 0;
            vm.carroCompra.disponible = 0;
          }
        };
        vm.actualizarTotales = function () {
          vm.carroCompra.totalbs = vm.carroCompra.preciobs * vm.carroCompra.cantidad;
          vm.carroCompra.totalsus = vm.carroCompra.preciosus * vm.carroCompra.cantidad;
        };
        vm.agregarAlCarro = function () {
          if (vm.elementoAgregado == 0) {
            var existe = 0;
            var posicion = 0;
            for (var c = 0; c < $rootScope.carroDeCompras.length; c++) {
              if (($rootScope.carroDeCompras[c].id == vm.carroCompra.id) && ($rootScope.carroDeCompras[c].tamanhos_id == vm.carroCompra.tamanhos_id)) {
                existe++;
                posicion = c;
              }
            }
            if (existe > 0) {
              var cantTemp = $rootScope.carroDeCompras[posicion].cantidad;
              cantTemp += vm.carroCompra.cantidad;
              if (cantTemp > $rootScope.carroDeCompras[posicion].disponible) {
                cantTemp = vm.carroCompra.disponible;
              }
              $rootScope.carroDeCompras[posicion].cantidad = cantTemp;
              $rootScope.carroDeCompras[posicion].totalbs = $rootScope.carroDeCompras[posicion].preciobs * cantTemp;
              $rootScope.carroDeCompras[posicion].totalsus = $rootScope.carroDeCompras[posicion].preciosus * cantTemp;
            } else {
              $rootScope.carroDeCompras.push(vm.carroCompra);
            }
            $log.debug($rootScope.carroDeCompras);
            vm.elementoAgregado = 1;
          }
        };
        vm.cerrarModal = function () {
          $modalInstance.close();
        };
      }
    );
})();
