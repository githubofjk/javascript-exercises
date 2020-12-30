const caesar = function(string, key) {
    let charUnicode;
    let charUnicodeCipher;
    let stringCipher = "";

    // shift string characters using caesar's cipher key
    // Caesar's cipher = (character + key) % 26
    for (i = 0; i < string.length; i++) {
        charUnicode = string.charCodeAt(i);
        // keep punctuation and spaces
        if (charUnicode >= 32 && charUnicode <= 47) {
            stringCipher += String.fromCharCode(charUnicode);
        }
        // preserve upper and lower case 
        else if (charUnicode >= 65 && charUnicode <= 90) {
            charUnicodeCipher = (((charUnicode - 'A'.charCodeAt()) + key) % 26) + 'A'.charCodeAt();
            // works with negative shift
            if (charUnicodeCipher < 65) {
                charUnicodeCipher += 26;
            }
            stringCipher += String.fromCharCode(charUnicodeCipher);
        } else if (charUnicode >= 97 && charUnicode <= 122) {
            charUnicodeCipher = (((charUnicode - 'a'.charCodeAt()) + key) % 26) + 'a'.charCodeAt();
            // works with negative shift
            if (charUnicodeCipher < 97) {
                charUnicodeCipher += 26;
            }
            stringCipher += String.fromCharCode(charUnicodeCipher);
        }
    }

    return stringCipher;
}

module.exports = caesar