(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('InicioController', function ($log, TablesService) {
      var vm = this;
      vm.contenidos = new Array();
      // EJEMPLO TABLESERVICE
      var parametros = {
        comparaciones: [
          {campo: 'state', operador: 'igual', dato: 'contacto'}
        ],
        orden: [
          {campo: 'id', direccion: 'asc'}
        ]
      };
      TablesService.filtrar('contenidos', parametros)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.contenidos = response.resultado.data;
          } else {
            $log.debug('Ocurrió un error al intentar obtener los contenidos')
          }
        });
      //
    });
})();
