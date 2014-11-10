var passwordControllers = angular.module('passwordControllers', []);

passwordControllers.controller('MainController',
    ['$scope',
    function($scope)
    {
    }]);

passwordControllers.controller('GeneratorController',
    ['$scope', 'passwords',
    function($scope, passwords)
    {
      $scope.numChars = 12;
      $scope.useAlphaLower = true;
      $scope.useAlphaUpper = true;
      $scope.useDigits = true;
      $scope.useSymbols = true;

      var generatePassword = function()
      {
        var characterPool = passwords.buildPool($scope.useAlphaLower,
                                                $scope.useAlphaUpper,
                                                $scope.useDigits,
                                                $scope.useSymbols);
        $scope.randomPassword = passwords.generateRandom(
          $scope.numChars, characterPool);
      };

      $scope.generatePassword = generatePassword;

      generatePassword();
    }]);
