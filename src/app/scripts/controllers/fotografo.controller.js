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

      vm.items = [
        {
          "fotografia":"algo"
        },
        {
          "fotografia":"otra"
        }
      ];
      vm.open = function (size) {
        vm.modalInstance = $modal.open({
          templateUrl: 'app/views/myModal.html',
          controller: 'myModalController',
          controllerAs:'vmModalFotografo',
          size: size,
          resolve: {
            items: function () {
              return vm.items
            }
          }
        })

      }


    })
    .controller('myModalController', function ($log, $modalInstance, items) {
      var vm = this;

      vm.items = items;
        vm.save = function (param) {
        $log.debug(param)

        };
      vm.cancel = function(){
        $modalInstance.dismiss('cancel');
      }
      vm.cerrar = function(){
        $modalInstance.close();
      }

      }
    )

  ;


})();
