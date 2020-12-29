function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(param) {
    let result = 0;

    if (param.length === 0) {
        return 0;
    } else if (param.length === 1) {
        return param[0];
    } else {
        param.forEach(value => result += value);
        return result;
    }
}

function multiply(param) {
    let result = 1;

    param.forEach(value => result *= value);
    return result;
}

function power(a, b) {
    let result = 1;

    for (i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}