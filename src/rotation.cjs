module.exports.set_rotation = function (teta) {
    if (isNaN(parseFloat(teta))) {
        console.log(new Error(`${teta} is not a number`));
        return 84;
    }
    let angle = parseFloat(teta);
    angle = angle * (Math.PI / 180);
    return [[Math.cos(angle), -1 * Math.sin(angle), 0],[Math.sin(angle), Math.cos(angle), 0],[0, 0, 1]];
};