var passwordServices = angular.module('passwordServices', []);

passwordServices.service('passwords', [function()
    {
      this.buildPool = function(useAlphaLower, useAlphaUpper, useNumeric, useSymbols)
      {
        var alphaLower = useAlphaLower ? 'abcdefghijklmnopqrstuvwxyz' : '';
        var alphaUpper = useAlphaUpper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
        var numeric = useNumeric ? '0123456789' : '';
        var symbols = useSymbols ? '`~!@#$%^&*()-_=+\\|]}[{;:\',./<>?' : '';
          return(alphaLower + alphaUpper + numeric + symbols);
      };

      this.generateRandom = function(passwordLength, characterPool)
      {
        // make use of local entropy from browser or crypto library if available
        // using seedrandom by David Bau
        Math.seedrandom();


        var password = '';
        for(i=0;i<passwordLength;i++)
        {
          password += characterPool.charAt(Math.floor(Math.random() * characterPool.length))
        }
        return password;
      };

      this.calculateEntropy = function(length, pool)
      {
        return (length * Math.log(pool.length) / Math.log(2));
      };

      // Average time to crack a password, rounded to thousandths
      this.avgTimeToCrack = function(entropy, seconds_per_guess)
      {
        var seconds = (0.5*Math.pow(2, entropy)) * seconds_per_guess;
        return Math.round(1000 * seconds) / 1000;
      };
    }]);
