module.exports.set_scaling = function (x, y) {
    if (isNaN(parseFloat(x))) {
        console.log(new Error(`${x} is not a number`));
        return 84
    }
    if (isNaN(parseFloat(y))) {
        console.log(new Error(`${y} is not a number`));
        return 84
    }
    return [[parseFloat(x), 0, 0],[0, parseFloat(y), 0],[0, 0, 1]];
};
