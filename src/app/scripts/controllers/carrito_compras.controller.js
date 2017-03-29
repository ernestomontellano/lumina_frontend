(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('CarritoComprasController', function () {
       var vm = this;

      vm.comprados = [
        {nombre:"Ejemplo de fotografía"},
        {nombre:"Otro Ejemplo"},
        {nombre:"SDK-3234"}
      ];

    });
})();
