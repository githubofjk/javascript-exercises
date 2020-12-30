const palindromes = function(string) {
    let reverse = string.replace(/[ !,.]/g, "").split('').reverse().join('').toLowerCase();
    return reverse === string.replace(/[ !,.]/g, "").toLowerCase();
}

module.exports = palindromes