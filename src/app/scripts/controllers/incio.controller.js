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


      /*CARRUSEL*/

      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      vm.active = 0;
      vm.currIndex=0;
      vm.slides = [{
        image:'assets/images/home_slider.jpg',
        id:0

      },{
        image:'assets/images/home_slider2.jpg',
        id:1
      },
        {
          image:'assets/images/home_slider3.jpg',
          id:2
        }]

    });
})();
