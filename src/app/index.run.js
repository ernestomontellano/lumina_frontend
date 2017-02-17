(function() {
  'use strict';

  angular
    .module('luminaFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
