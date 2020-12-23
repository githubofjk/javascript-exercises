const sumAll = function(arg1, arg2) {
    let lowestNum;
    let highestNum;

    let result = 0;

    if (arg1 < 0 || arg2 < 0) {
        return "ERROR";
    } else if (typeof(arg1) !== "number" || typeof(arg2) !== "number") {
        return "ERROR";
    } else if (arg2 > arg1) {
        lowestNum = arg1;
        highestNum = arg2;
    } else {
        lowestNum = arg2;
        highestNum = arg1;
    }

    for (i = lowestNum; i <= highestNum; i++) {
        result += i;
    }

    return result;
}

module.exports = sumAll