(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('InicioController', function ($log, TablesService) {
      var vm = this;

      // EJEMPLO TABLESERVICE
      var parametros = {
        comparaciones: [
          {campo: 'id', operador: 'mayor', dato: 5}
        ],
        orden: [
          {campo: 'nombre', direccion: 'asc'}
        ]
      };
      TablesService.filtrar('fotografos', parametros)
        .success(function (respuesta) {
          $log.debug(respuesta);
        });
      //

    });
})();
