module.exports.set_reflection = (teta) => {
    if (isNaN(parseFloat(teta))) {
        console.log(new Error(`${teta} is not a number`));
        return 84
    }
    let angle = parseFloat(teta);
    angle = angle * (Math.PI / 180);
    angle = 2 * angle;
    let sinus = Math.sin(angle);
    let cosin = Math.cos(angle);
    if (cosin > 0 && cosin < 0.005)
        cosin = 0.00;
    if (sinus > 0 && sinus < 0.005)
        sinus = 0.00;
    return [[cosin, sinus, 0], [sinus, -1 * cosin, 0], [0, 0, 1]];
};