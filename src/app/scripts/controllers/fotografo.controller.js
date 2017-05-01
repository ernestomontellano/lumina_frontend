(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('FotografoController', function ($log, $rootScope, $stateParams, TablesService, $modal) {
      var vm = this;
      vm.fotografo = new Array();
      vm.animationsEnabled = true;
      var parametros = {
        soporte: 'true',
        imagenes: 'true',
        fotografos: 'true',
        tamanhos: 'true',
        etiquetas: 'true',
        comparaciones: [
          {campo: 'id', operador: 'igual', dato: $stateParams.id}
        ]
      };
      TablesService.filtrar('fotografos', parametros)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data[0]);
            vm.fotografo = response.resultado.data[0];
          } else {
            $log.debug('Ocurrió un error al intentar obtener el fotógrafo')
          }
        });
      vm.open = function (size, elementos, posicion, tipo) {
        vm.modalInstance = $modal.open({
          templateUrl: 'app/views/carrito_compras/carro_modal.html',
          controller: 'CarritoComprasModalController',
          controllerAs: 'vmimagencarro',
          size: size,
          resolve: {
            elementos: function () {
              return elementos;
            },
            posicion: function () {
              return posicion;
            },
            tipo: function () {
              return tipo;
            }
          }
        });
      };
    });
})();
