const repeatString = function(input, counter) {
    let result = '';

    if (input === '') {
        return result;
    } else if (counter < 0) {
        result = 'ERROR';
        return result;
    } else if (counter === 0) {
        return result;
    } else {
        for (i = 0; i < counter; i++) {
            result += input;
        }
    }
    return result;
}

module.exports = repeatString