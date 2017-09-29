(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('InicioController', function ($log, TablesService) {
      var vm = this;
      vm.contenido = new Array();
      vm.diapositivas = new Array();
      vm.etiquetadestacada = 0;
      vm.etiquetadestacada2 = 0;
      vm.galeria = '';
      vm.galeria2 = '';
      vm.destacada = new Array();
      vm.destacada2 = new Array();
      var parametros = {
        comparaciones: [
          {campo: 'state', operador: 'igual', dato: 'inicio'}
        ]
      };
      TablesService.shower('contenidos', parametros)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.contenido = response.resultado.data;
          } else {
            $log.debug('Ocurrió un error al intentar obtener el contenido')
          }
        });
      TablesService.listar('diapositivas')
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado);
            vm.diapositivas = response.resultado;
          } else {
            $log.debug('Ocurrió un error al intentar obtener las diapositivas')
          }
        });
      var parametros2 = {
        comparaciones: [
          {campo: 'id', operador: 'igual', dato: 1}
        ]
      };
      TablesService.shower('configuraciones', parametros2)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.etiquetadestacada = response.resultado.data[0];
            var parametros3 = {
              comparaciones: [
                {campo: 'id', operador: 'igual', dato: vm.etiquetadestacada.etiquetas_id}
              ]
            };
            TablesService.shower('etiquetas', parametros3)
              .success(function (response) {
                if (response.respuesta) {
                  vm.galeria = response.resultado.data[0].etiqueta;
                } else {
                  $log.debug('Ocurrió un error al intentar obtener la galería')
                }
              });

            var parametros4 = {
              imagenes: 'true',
              fotografos: 'true',
              soporte: 'true',
              tamanhos: 'true',
              etiquetas: 'true',
              comparaciones: [
                {campo: 'etiquetas_id', operador: 'igual', dato: vm.etiquetadestacada}
              ]
            };
            TablesService.shower('imagenesetiquetas', parametros4)
              .success(function (response2) {
                if (response2.respuesta) {
                  $log.debug(response2.resultado.data);
                  var rando = Math.round(Math.random() * ((response2.resultado.data.length - 1) - 0));
                  vm.destacada = response2.resultado.data[rando];
                  $log.debug(vm.destacada);
                } else {
                  $log.debug('Ocurrió un error al intentar obtener las imágenes')
                }
              });
          } else {
            $log.debug('Ocurrió un error al intentar obtener el contenido')
          }
        });
      var parametrosb2 = {
        comparaciones: [
          {campo: 'id', operador: 'igual', dato: 2}
        ]
      };
      TablesService.shower('configuraciones', parametrosb2)
        .success(function (response) {
          if (response.respuesta) {
            $log.debug(response.resultado.data);
            vm.etiquetadestacada2 = response.resultado.data[0];
            var parametrosb3 = {
              comparaciones: [
                {campo: 'id', operador: 'igual', dato: vm.etiquetadestacada2.etiquetas_id}
              ]
            };
            TablesService.shower('etiquetas', parametrosb3)
              .success(function (response) {
                if (response.respuesta) {
                  vm.galeria2 = response.resultado.data[0].etiqueta;
                } else {
                  $log.debug('Ocurrió un error al intentar obtener la galería')
                }
              });

            var parametrosb4 = {
              imagenes: 'true',
              fotografos: 'true',
              soporte: 'true',
              tamanhos: 'true',
              etiquetas: 'true',
              comparaciones: [
                {campo: 'etiquetas_id', operador: 'igual', dato: vm.etiquetadestacada2}
              ]
            };
            TablesService.shower('imagenesetiquetas', parametrosb4)
              .success(function (response2) {
                if (response2.respuesta) {
                  $log.debug(response2.resultado.data);
                  var rando = Math.round(Math.random() * ((response2.resultado.data.length - 1) - 0));
                  vm.destacada2 = response2.resultado.data[rando];
                  $log.debug(vm.destacada2);
                } else {
                  $log.debug('Ocurrió un error al intentar obtener las imágenes')
                }
              });
          } else {
            $log.debug('Ocurrió un error al intentar obtener el contenido')
          }
        });
      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      vm.active = 0;
      vm.currIndex = 0;
    });
})();
