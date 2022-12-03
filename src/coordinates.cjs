module.exports.set_coords = function (x, y) {
    if (isNaN(parseFloat(x))) {
        console.log(new Error(`${x} is not a number`));
        return 84;
    }
    if (isNaN(parseFloat(y))) {
        console.log(new Error(`${y} is not a number`));
        return 84;
    }
    let fx = parseFloat(x);
    let fy = parseFloat(y);
    return [fx, fy, 1];
};
