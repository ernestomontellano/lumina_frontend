(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('GaleriaController', function ($log, $rootScope, $stateParams, TablesService, $modal) {
      var vm = this;
      vm.galeria = new Array();
      vm.imagenes = new Array();
      var parametros = {
        comparaciones: [
          {campo: 'id', operador: 'igual', dato: $stateParams.id}
        ]
      };
      TablesService.filtrar('etiquetas', parametros)
        .success(function (response) {
          if (response.respuesta) {
            vm.galeria = response.resultado.data[0];
            var parametros2 = {
              imagenes: 'true',
              fotografos: 'true',
              soporte: 'true',
              tamanhos: 'true',
              etiquetas: 'true',
              comparaciones: [
                {campo: 'etiquetas_id', operador: 'igual', dato: $stateParams.id}
              ]
            };
            TablesService.filtrar('imagenesetiquetas', parametros2)
              .success(function (response2) {
                if (response2.respuesta) {
                  $log.debug(response2.resultado.data);
                  vm.imagenes = response2.resultado.data;
                } else {
                  $log.debug('Ocurrió un error al intentar obtener las imágenes')
                }
              });
          } else {
            $log.debug('Ocurrió un error al intentar obtener la galería')
          }
        });
      vm.items = [
        {
          "fotografia": "algo"
        },
        {
          "fotografia": "otra"
        }
      ];
      vm.open = function (size, imagen) {
        vm.modalInstance = $modal.open({
          templateUrl: 'app/views/carrito_compras/carro_modal2.html',
          controller: 'CarritoComprasModal2Controller',
          controllerAs: 'vmimagencarro',
          size: size,
          resolve: {
            elemento: function () {
              return imagen;
            }
          }
        });
      };
    });
})();
