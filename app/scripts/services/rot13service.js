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

    // Ascii values.
    var ASCII_a = 97;
    var ASCII_z = 122;
    var ASCII_A = 65;
    var ASCII_Z = 90;

    function isLowercase(asciiValue) {
      if(asciiValue >= ASCII_a && asciiValue <= ASCII_z) {
        return true;
      }

      return false;
    }

    function isUppercase(asciiValue) {
      if(asciiValue >= ASCII_A && asciiValue <= ASCII_Z) {
        return true;
      }

      return false;
    }

    return {
      encryptDecryptText: function(inputText) {
        var outputText = '';
        // For each character in inputText...
        angular.forEach(inputText, function(value) {
          // Get the ascii value of the character.
          var asciiValue = value.charCodeAt(0);

          if(isUppercase(asciiValue) || isLowercase(asciiValue)) {
            // Move the charater to the right 13 times.
            var rotatedAscii = asciiValue + 13;

            // Check for overflows...
            if(isUppercase(asciiValue) && rotatedAscii > 90) {
              rotatedAscii = rotatedAscii - ASCII_Z + ASCII_A - 1;
            }
            else if(isLowercase(asciiValue) && rotatedAscii > 122) {
              rotatedAscii = rotatedAscii - ASCII_z + ASCII_a - 1;
            }
            outputText += (String.fromCharCode(rotatedAscii));
          }
          else {
            // Do anything if the character is not a letter.
            outputText += value;
          }

        });

        return outputText;
      }
    };

  });
