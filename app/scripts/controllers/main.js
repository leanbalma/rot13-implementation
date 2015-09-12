'use strict';

/**
 * @ngdoc function
 * @name rot13ImplementationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rot13ImplementationApp
 */
angular.module('rot13ImplementationApp')
  .controller('MainCtrl', function ($scope, rot13Service) {

    $scope.encryptDecryptText = function() {
      $scope.outputText = rot13Service.encryptDecryptText($scope.inputText);
    };

  });
