(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('FotografosController', function ($log, $rootScope, TablesService) {
      var vm = this;
      vm.fotografos = new Array();
      var parametros = {
        orden: [
          {campo: 'nombre', direccion: 'asc'}
        ]
      };
      TablesService.filtrar('fotografos', parametros)
        .success(function (response) {
          if (response.respuesta) {
            vm.fotografos = response.resultado.data;
          } else {
            $log.debug('Ocurrió un error al intentar obtener los fotógrafos')
          }
        });
    });
})();
