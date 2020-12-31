const fibonacci = function(n) {
    // doesn't accept negatives
    if (n < 0) {
        return "OOPS";
    }
    // DOES accept strings
    n = parseInt(n);

    // https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci