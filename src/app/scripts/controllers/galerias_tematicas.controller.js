(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('GaleriasTematicasController', function ($log, $rootScope, TablesService) {
      var vm = this;
      vm.tematicas = new Array();
      var parametros = {
        orden: [
          {campo: 'etiqueta', direccion: 'asc'}
        ]
      };
      TablesService.filtrar('etiquetas', parametros)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.tematicas = response.resultado.data;
          } else {
            $log.debug('Ocurrió un error al intentar obtener las galerías')
          }
        });
    });
})();
