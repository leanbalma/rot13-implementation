'use strict';

/**
 * @ngdoc service
 * @name rot13ImplementationApp.rot13Service
 * @description
 * # rot13Service
 * Service in the rot13ImplementationApp.
 */
angular.module('rot13ImplementationApp')
  .service('rot13Service', function () {

    return {
      /* A = 65
       * Z = 90
       * a = 97
       * z = 122
       */
      encryptDecryptText: function(inputText) {
        var outputText = '';
        angular.forEach(inputText, function(value) {
          console.log(value);
          var asciiValue = value.charCodeAt(0);
          console.log(asciiValue);
          if((asciiValue >= 65 && asciiValue <= 90) || (asciiValue >= 97 && asciiValue <= 122) ) {
            var rotatedAscii = asciiValue + 13;

            if((asciiValue >= 65 && asciiValue <= 90) && rotatedAscii > 90) {
              rotatedAscii = rotatedAscii - 90 - 1 + 65;
            }
            else if( (asciiValue >= 97 && asciiValue <= 122) && rotatedAscii > 122) {
              rotatedAscii = rotatedAscii - 122 - 1 + 97;
            }
            outputText += (String.fromCharCode(rotatedAscii));
          }
          else {
            outputText += value;
          }
        });
        console.log(outputText);
        return outputText;
      }
    };

  });
