const reverseString = function(input) {
    let result = '';

    let array = input.split("");

    let arraylength = array.length - 1;

    for (i = arraylength; i >= 0; i--) {
        result += array[i];
    }

    return result;
}

module.exports = reverseString