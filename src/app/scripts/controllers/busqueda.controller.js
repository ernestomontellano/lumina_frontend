(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('BusquedaController', function ($log, $stateParams, TablesService) {
      var vm = this;
      vm.resultados = new Array();
      vm.haycriterio = false;
      vm.numerores = 0;
      vm.buscando = false;
      if (($stateParams.criterio) && ($stateParams.criterio.length > 0)) {
        vm.haycriterio = true;
        vm.buscando = true;
        vm.criterio = $stateParams.criterio;
        var parametros = {
          comparaciones: [
            {campo: 'nombre', operador: 'like', dato: vm.criterio}
          ]
        };
        TablesService.shower('fotografos', parametros)
          .success(function (response) {
            if (response.respuesta) {
              $log.debug(response.resultado.data);
              var resultadostemp = response.resultado.data;
              var restemp = new Array();
              var existe = 0;
              for (var r = 0; r < resultadostemp.length; r++) {
                existe = 0;
                for (var r2 = 0; r2 < vm.resultados.length; r2++) {
                  if ((vm.resultados[r2].tipo == 'Fotógrafo') && (vm.resultados[r2].id == resultadostemp[r].id)) {
                    existe++;
                  }
                }
                if (existe == 0) {
                  restemp = {
                    id: resultadostemp[r].id,
                    nombre: resultadostemp[r].nombre,
                    tipo: 'Fotógrafo'
                  }
                  vm.resultados.push(restemp);
                }
              }
              var parametros = {
                comparaciones: [
                  {campo: 'biografia', operador: 'like', dato: vm.criterio}
                ]
              };
              TablesService.shower('fotografos', parametros)
                .success(function (response) {
                  if (response.respuesta) {
                    $log.debug(response.resultado.data);
                    var resultadostemp = response.resultado.data;
                    for (var r = 0; r < resultadostemp.length; r++) {
                      existe = 0;
                      for (var r2 = 0; r2 < vm.resultados.length; r2++) {
                        if ((vm.resultados[r2].tipo == 'Fotógrafo') && (vm.resultados[r2].id == resultadostemp[r].id)) {
                          existe++;
                        }
                      }
                      if (existe == 0) {
                        restemp = {
                          id: resultadostemp[r].id,
                          nombre: resultadostemp[r].nombre,
                          tipo: 'Fotógrafo'
                        }
                        vm.resultados.push(restemp);
                      }
                    }
                    var parametros = {
                      comparaciones: [
                        {campo: 'etiqueta', operador: 'like', dato: vm.criterio}
                      ]
                    };
                    TablesService.shower('etiquetas', parametros)
                      .success(function (response) {
                        if (response.respuesta) {
                          $log.debug(response.resultado.data);
                          var resultadostemp = response.resultado.data;
                          for (var r = 0; r < resultadostemp.length; r++) {
                            existe = 0;
                            for (var r2 = 0; r2 < vm.resultados.length; r2++) {
                              if ((vm.resultados[r2].tipo == 'Galería') && (vm.resultados[r2].id == resultadostemp[r].id)) {
                                existe++;
                              }
                            }
                            if (existe == 0) {
                              restemp = {
                                id: resultadostemp[r].id,
                                nombre: resultadostemp[r].etiqueta,
                                tipo: 'Galería'
                              }
                              vm.resultados.push(restemp);
                            }
                          }
                          vm.numerores = vm.resultados.length;
                          vm.buscando = false;
                        } else {
                          $log.debug('Ocurrió un error al intentar obtener la búsqueda en los nombres de las galerías');
                          vm.buscando = false;
                        }
                      });
                  } else {
                    $log.debug('Ocurrió un error al intentar obtener la búsqueda en las biografías de los fotógrafos');
                    vm.buscando = false;
                  }
                });
            } else {
              $log.debug('Ocurrió un error al intentar obtener la búsqueda en los nombres de los fotógrafos');
              vm.buscando = false;
            }
          });
      } else {
        vm.haycriterio = false;
      }
    });
})();
