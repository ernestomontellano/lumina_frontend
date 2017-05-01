(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('GaleriasTematicasController', function ($log, $rootScope, TablesService) {
      var vm = this;
      vm.tematicas = new Array();
      vm.obtenerImagen = function (tempos) {
        var parametros4 = {
          imagenes: 'true',
          fotografos: 'true',
          soporte: 'true',
          tamanhos: 'true',
          etiquetas: 'true',
          comparaciones: [
            {campo: 'etiquetas_id', operador: 'igual', dato: vm.tematicas[tempos].id}
          ]
        };
        TablesService.filtrar('imagenesetiquetas', parametros4)
          .success(function (response2) {
            if (response2.respuesta) {
              $log.debug(response2.resultado.data);
              var rando = Math.round(Math.random() * ((response2.resultado.data.length - 1) - 0));
              vm.tematicas[tempos].imagen = response2.resultado.data[rando].imagenes[0].imagen;
              $log.debug('vm.tematicas', vm.tematicas);
            } else {
              $log.debug('Ocurrió un error al intentar obtener las imágenes')
            }
          });
      };
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
            $log.debug('vm.tematicas', vm.tematicas);
            for (var i = 0; i < vm.tematicas.length; i++) {
              vm.obtenerImagen(i);
            }
          } else {
            $log.debug('Ocurrió un error al intentar obtener las galerías')
          }
        });
    });
})();
