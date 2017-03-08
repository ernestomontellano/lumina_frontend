(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('InicioController', function ($log, TablesService) {
      var vm = this;

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
        .success(function (respuesta) {
          $log.debug(respuesta);
        });
      //

    });
})();
