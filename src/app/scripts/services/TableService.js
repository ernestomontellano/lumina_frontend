'use strict';
angular
  .module('luminaFrontend')
  .factory('TablesService', function ($http, $rootScope) {
    return {
      listar: function (tabla) {
        return $http.get($rootScope.api + '/api/' + tabla);
      },
      visualizar: function (tabla, id) {
        var parametros = {
          'token': $rootScope.tk
        };
        return $http.get($rootScope.api + '/api/' + tabla + '/visualizar/' + id, parametros);
      },
      filtrar: function (tabla, parametros) {
        return $http.post($rootScope.api + '/api/' + tabla + '/filtrar', parametros);
      },
      almacenar: function (tabla, parametros) {
        parametros['token'] = $rootScope.tk;
        return $http.post($rootScope.api + '/api/' + tabla + '/almacenar', parametros);
      },
      actualizar: function (tabla, id, parametros) {
        parametros['token'] = $rootScope.tk;
        return $http.post($rootScope.api + '/api/' + tabla + '/actualizar/' + id, parametros);
      },
      eliminar: function (tabla, id) {
        return $http.post($rootScope.api + '/api/' + tabla + '/eliminar/' + id, {token: $rootScope.tk});
      }
    };
  });
