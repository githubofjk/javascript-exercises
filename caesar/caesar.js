const caesar = function(string, key) {
    return string
        .split("")
        .map(char => cipher(char, key))
        .join("");
}

// shift string characters using caesar's cipher key
function cipher(char, key) {
    let charUnicode = char.charCodeAt();
    let charCase = charUnicode > 'Z'.charCodeAt() ? 'a'.charCodeAt() : 'A'.charCodeAt();
    let isPunctuation = (charUnicode >= 32 && charUnicode <= 47) ? true : false;

    // Caesar's cipher = (character + key) % 26
    let cipherChar = isPunctuation ? char : String.fromCharCode(((((charUnicode + key - charCase) % 26) + 26) % 26) + charCase);
    return cipherChar
}

module.exports = caesar