module.exports.multiplication_third = function (a, b) {
    let c = [[undefined,undefined,undefined],[undefined, undefined, undefined],[undefined, undefined]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                sum += a[i][k] * b[k][j];
            }
            c[i][j] = sum;
        }
    }
    return c;
}

module.exports.set_new_position = function (a, b) {
    let line1 = a[0][0] * b[0] + a[0][1] * b[1] + a[0][2] * b[2];
    let line2 = a[1][0] * b[0] + a[1][1] * b[1] + a[1][2] * b[2];
    let line3 = a[2][0] * b[0] + a[2][1] * b[1] + a[2][2] * b[2];
    return [line1, line2, line3]
}