const removeFromArray = function(array, ...remainingArgs) {
    let result = arguments[0];
    let remainingArgsArray = remainingArgs;

    let resultLength = result.length;
    let remainingArgsArrayLength = remainingArgsArray.length;

    for (i = 0; i < remainingArgsArrayLength; i++) {
        for (j = 0; j < resultLength; j++) {
            if (remainingArgsArray[i] === result[j]) {
                result.splice(j, 1);
            }
        }
    }

    return result;
}

module.exports = removeFromArray