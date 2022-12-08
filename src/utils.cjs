module.exports.speed_calc = function(va, vb) {
    return [vb[0] - va[0], vb[1] - va[1], vb[2] - va[2]];
};

module.exports.movement = function (vb, n, speed, res) {
    let position = [(vb[0] + (n * speed[0])), (vb[1] + (n * speed[1])), (vb[2] + (n * speed[2]))];

    res.write(`At time t + ${n}, ball coordinates will be:\n`)
    res.write(`(${position[0].toFixed(2)}, ${position[1].toFixed(2)}, ${position[2].toFixed(2)})\n`);

    return position;
};

module.exports.collide = function name(vb, speed, res) {
    if (vb[2] === 0) {
        res.write("The incidence angle is:\n");
        let angle = 0;
        res.write(`${angle.toFixed(2)} degrees\n`);
    }
    if ((vb[2] > 0 && speed[2] < 0) || (vb[2] < 0 && speed[2] > 0)) {
        res.write("The incidence angle is:\n");
        let t = -vb[2] / speed[2];
        let position_z0 = [(vb[0] + (t * speed[0])), (vb[1] + (t * speed[1])), (vb[2] + (t * speed[2]))];
        let base = Math.sqrt(((vb[0] - position_z0[0]) ** 2) + ((vb[1] - position_z0[1]) ** 2));
        let angle = Math.atan(vb[2]/base);
        angle = angle * (180/Math.PI);
        res.write(`${angle.toFixed(2)} degrees\n`);
    } else {
        res.write("The ball won't reach the paddle.\n");
    }
};

module.exports.help = function() {
    console.log("USAGE");
    console.log("   ./101pong x0 y0 z0 x1 y1 z1 n");
    console.log("");
    console.log("DESCRIPTION");
    console.log("   x0  ball abscissa at time t - 1");
    console.log("   y0  ball ordinate at time t - 1");
    console.log("   z0  ball altitude at time t - 1");
    console.log("   x1  ball abscissa at time t");
    console.log("   y1  ball ordinate at time t");
    console.log("   z1  ball altitude at time t");
    console.log("   n   time shift (greater than or equal to zero, integer)");
};

module.exports.setvect = function(x, y, z) {
    if (isNaN(parseFloat(x))) {
        console.log(new Error(`${x} is not a number`));
        return 84;
    } else if (isNaN(parseFloat(y))) {
        console.log(new Error(`${y} is not a number`));
        return 84;
    } else if (isNaN(parseFloat(z))) {
        console.log(new Error(`${z} is not a number`));
        return 84;
    } else {
        return [parseFloat(x), parseFloat(y), parseFloat(z)];
    }
}
