(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('FotografoController', function ($log, $rootScope, $stateParams, TablesService) {
      var vm = this;
      vm.fotografo = new Array();
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
    });
})();
