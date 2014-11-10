var passwordApp = angular.module('passwordApp', [
    'ngRoute',
    'passwordControllers',
    'passwordServices'
    ]);

passwordApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/generator.html',
          controller: 'GeneratorController'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
