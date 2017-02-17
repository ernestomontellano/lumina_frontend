(function() {
  'use strict';

  angular
    .module('luminaFrontend')
    .controller('InicioController', InicioController);

  /** @ngInject */
  function InicioController($log) {
    var vm = this;
    $log.debug(vm);
  
  }
})();
