const ftoc = function(arg1) {
    let result = (arg1 - 32) * (5 / 9);
    result = parseFloat(result.toFixed(1));

    if (result === 0.0) {
        return 0;
    }

    return result;
}

const ctof = function(arg1) {
    let result = arg1 * (9 / 5) + 32;
    result = parseFloat(result.toFixed(1));

    if (result === 0.0) {
        return 0;
    }

    return result;
}

module.exports = {
    ftoc,
    ctof
}