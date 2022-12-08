module.exports.ac_error = function (ac) {
    if (ac < 9) {
        console.log(new Error("Not enough arguments"));
        return 84;
    }
    if (ac > 9) {
        console.log(new Error("Too many arguments"));
        return 84;
    }
    return 0;
}

module.exports.check_n = function(n) {
    let t = parseFloat(n);
    if (isNaN(t)) {
        console.log(new Error(`${n} is not a number`));
        return 84;
    } else if (t % 1 !== 0) {
        console.log(new Error(`${n} is not an integer`));
        return 84;
    } else if (t < 0) {
        console.log(new Error(`${n} is negative`));
        return 84;
    } else {
        n = parseInt(n);
    }
    return n;
}