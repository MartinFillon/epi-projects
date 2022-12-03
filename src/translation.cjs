module.exports.set_translation = function (x, y) {
    if (isNaN(parseFloat(x))) {
        console.log(new Error(`${x} is not a number`));
        return 84
    }
    if (isNaN(parseFloat(y))) {
        console.log(new Error(`${y} is not a number`));
        return 84
    }
    return [[1, 0, parseFloat(x)],[0, 1, parseFloat(y)],[0, 0, 1]];
};
