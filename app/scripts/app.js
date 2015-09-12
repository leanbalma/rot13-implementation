'use strict';

/**
 * @ngdoc overview
 * @name rot13ImplementationApp
 * @description
 * # rot13ImplementationApp
 *
 * Main module of the application.
 */
angular
  .module('rot13ImplementationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
