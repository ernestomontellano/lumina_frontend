(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('CarritoComprasController', function ($rootScope, $log, TablesService) {
      var vm = this;
      vm.zonas = new Array();
      TablesService.filtrar('zonas', {})
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.zonas = response.resultado.data;
          } else {
            $log.debug('Ocurrió un error al intentar obtener el fotógrafo')
          }
        });
      vm.confirmarCompra = function () {
        $log.debug('carroDeComprasDatos', $rootScope.carroDeComprasDatos);
        $log.debug('carroDeCompras', $rootScope.carroDeCompras);
        $rootScope.carroDeCompras = new Array();
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
      };
      vm.eliminarelemento = function (indice) {
        $rootScope.carroDeCompras.splice(indice, 1);
      };
    })
    .controller('CarritoComprasModalController', function ($rootScope, $modalInstance, elemento, soporte) {
        var vm = this;
        vm.imagenCarro = elemento;
        vm.soporteCarro = soporte;
        vm.tamanhoTemp = '0';
        vm.elementoAgregado = 0;
        var etiquetasTemp = '<strong>Galerías:</strong> ';
        for (var e = 0; e < vm.imagenCarro.etiquetas.length; e++) {
          if (e > 0) {
            etiquetasTemp += ', ';
          }
          etiquetasTemp += '<a href ng-click="vmimagencarro.cerrarModalMostrarGaleria(' + vm.imagenCarro.etiquetas[e].id + ')">' + vm.imagenCarro.etiquetas[e].etiqueta + '</a>';
        }
        var autorTemp = '<strong>Autor:</strong> <a href ng-click="vmimagencarro.cerrarModalMostrarFotografo(' + vm.imagenCarro.fotografo[0].id + ')">' + vm.imagenCarro.fotografo[0].nombre + '</a>';
        vm.carroCompra = {
          id: vm.imagenCarro.id,
          nombre: vm.imagenCarro.nombre,
          codigo: vm.imagenCarro.codigo,
          descripcion: vm.imagenCarro.descripcion,
          soporte: vm.soporteCarro,
          imagen: vm.imagenCarro.imagen,
          etiquetas: etiquetasTemp,
          fotografos_id: vm.imagenCarro.fotografo[0].id,
          fotografo: vm.imagenCarro.fotografo[0].nombre,
          fotografo_html: autorTemp,
          tamanhos_id: 0,
          tamanho: '',
          preciobs: 0,
          preciosus: 0,
          totalbs: 0,
          totalsus: 0,
          disponible: vm.imagenCarro.disponible,
          cantidad: 1
        };
        vm.asignarImagenDisponible = function () {
          if (vm.tamanhoTemp != '0') {
            var temp = vm.tamanhoTemp.split('//');
            vm.carroCompra.tamanhos_id = Number(temp[0]);
            vm.carroCompra.tamanho = temp[1];
            vm.carroCompra.preciobs = Number(temp[2]);
            vm.carroCompra.preciosus = Number(temp[3]);
            vm.carroCompra.totalbs = vm.carroCompra.preciobs * vm.carroCompra.cantidad;
            vm.carroCompra.totalsus = vm.carroCompra.preciosus * vm.carroCompra.cantidad;
          } else {
            vm.carroCompra.tamanhos_id = 0;
            vm.carroCompra.tamanho = '';
            vm.carroCompra.preciobs = 0;
            vm.carroCompra.preciosus = 0;
            vm.carroCompra.totalbs = 0;
            vm.carroCompra.totalsus = 0;
          }
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
            vm.elementoAgregado = 1;
          }
        };
        vm.cerrarModal = function () {
          $modalInstance.close();
        };
        vm.cerrarModalMostrarGaleria = function (id) {
          $modalInstance.close();
          var parametros = {
            id: id
          }
          $rootScope.cambiarPagina('galeria', parametros, true);
        };
        vm.cerrarModalMostrarFotografo = function (id) {
          $modalInstance.close();
          var parametros = {
            id: id
          }
          $rootScope.cambiarPagina('fotografo', parametros, true);
        };
      })
    .controller('CarritoComprasModal2Controller', function ($rootScope, $modalInstance, elemento) {
      var vm = this;
      vm.imagenCarro = elemento;
      vm.tamanhoTemp = '0';
      vm.elementoAgregado = 0;
      var etiquetasTemp = '<strong>Galerías:</strong> ';
      for (var e = 0; e < vm.imagenCarro.etiquetas.length; e++) {
        if (e > 0) {
          etiquetasTemp += ', ';
        }
        etiquetasTemp += '<a href ng-click="vmimagencarro.cerrarModalMostrarGaleria(' + vm.imagenCarro.etiquetas[e].id + ')">' + vm.imagenCarro.etiquetas[e].etiqueta + '</a>';
      }
      var autorTemp = '<strong>Autor:</strong> <a href ng-click="vmimagencarro.cerrarModalMostrarFotografo(' + vm.imagenCarro.fotografo[0].id + ')">' + vm.imagenCarro.fotografo[0].nombre + '</a>';
      vm.carroCompra = {
        id: vm.imagenCarro.id,
        nombre: vm.imagenCarro.nombre,
        codigo: vm.imagenCarro.codigo,
        descripcion: vm.imagenCarro.descripcion,
        soporte: vm.imagenCarro.fotografo[0].soporte[0].soporte,
        imagen: vm.imagenCarro.imagen,
        etiquetas: etiquetasTemp,
        fotografos_id: vm.imagenCarro.fotografo[0].id,
        fotografo: vm.imagenCarro.fotografo[0].nombre,
        fotografo_html: autorTemp,
        tamanhos_id: 0,
        tamanho: '',
        preciobs: 0,
        preciosus: 0,
        totalbs: 0,
        totalsus: 0,
        disponible: vm.imagenCarro.disponible,
        cantidad: 1
      };
      vm.asignarImagenDisponible = function () {
        if (vm.tamanhoTemp != '0') {
          var temp = vm.tamanhoTemp.split('//');
          vm.carroCompra.tamanhos_id = Number(temp[0]);
          vm.carroCompra.tamanho = temp[1];
          vm.carroCompra.preciobs = Number(temp[2]);
          vm.carroCompra.preciosus = Number(temp[3]);
          vm.carroCompra.totalbs = vm.carroCompra.preciobs * vm.carroCompra.cantidad;
          vm.carroCompra.totalsus = vm.carroCompra.preciosus * vm.carroCompra.cantidad;
        } else {
          vm.carroCompra.tamanhos_id = 0;
          vm.carroCompra.tamanho = '';
          vm.carroCompra.preciobs = 0;
          vm.carroCompra.preciosus = 0;
          vm.carroCompra.totalbs = 0;
          vm.carroCompra.totalsus = 0;
        }
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
          vm.elementoAgregado = 1;
        }
      };
      vm.cerrarModal = function () {
        $modalInstance.close();
      };
      vm.cerrarModalMostrarGaleria = function (id) {
        $modalInstance.close();
        var parametros = {
          id: id
        }
        $rootScope.cambiarPagina('galeria', parametros, true);
      };
      vm.cerrarModalMostrarFotografo = function (id) {
        $modalInstance.close();
        var parametros = {
          id: id
        }
        $rootScope.cambiarPagina('fotografo', parametros, true);
      };
    });
})();
