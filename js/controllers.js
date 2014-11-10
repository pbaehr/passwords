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
        var pool = passwords.buildPool($scope.useAlphaLower,
                                       $scope.useAlphaUpper,
                                       $scope.useDigits,
                                       $scope.useSymbols);
        var numChars = $scope.numChars;

        $scope.randomPassword = passwords.generateRandom(numChars, pool);

        var entropy = passwords.calculateEntropy(numChars, pool);

        $scope.avgTimeToCrack = passwords.avgTimeToCrack(entropy, .0001);

      };

      $scope.generatePassword = generatePassword;

      generatePassword();
    }]);
