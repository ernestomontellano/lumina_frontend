(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('FotografosController', function () {
      var vm = this;

      vm.fotografos = [
        {
          "nombre":"Sebastián Ormachea",
          "imagen":"../assets/images/foto-sebas.png",
          "link":""
        },
        {
          "nombre":"Tony Suarez",
          "imagen":"../assets/images/foto-tony.jpg",
          "link":""
        },
        {
          "nombre":"Lorem ipsum dolor",
          "imagen":"../assets/images/perfil.jpg",
          "link":""
        },
        {
          "nombre":"Lorem ipsum dolor",
          "imagen":"../assets/images/perfil.jpg",
          "link":""
        },
        {
          "nombre":"Lorem ipsum dolor",
          "imagen":"../assets/images/perfil.jpg",
          "link":""
        },
        {
          "nombre":"Lorem ipsum dolor",
          "imagen":"../assets/images/perfil.jpg",
          "link":""
        },
        {
          "nombre":"Lorem ipsum dolor",
          "imagen":"../assets/images/perfil.jpg",
          "link":""
        }
      ]


    });
})();
