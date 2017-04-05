(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('ContactoController', function ($log, TablesService) {
      var vm = this;
      vm.contenido = new Array();
      var parametros = {
        comparaciones: [
          {campo: 'state', operador: 'igual', dato: 'contacto'}
        ]
      };
      TablesService.filtrar('contenidos', parametros)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.contenido = response.resultado.data[0].contenido;
          } else {
            $log.debug('Ocurrió un error al intentar obtener el contenido')
          }
        });
    });
})();
