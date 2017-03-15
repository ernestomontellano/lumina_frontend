(function () {
  'use strict';
  angular
    .module('luminaFrontend')
    .controller('FotografoController', function ($log) {
      var vm = this;
      vm.catalogo = [
        {
          "img": "../assets/images/catalogo/catalogo1.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo2.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo3.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo4.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo5.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo6.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo7.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo8.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo9.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo10.jpg"
        },
        {
          "img": "../assets/images/catalogo/catalogo11.jpg"
        }
      ]
    });
})();
