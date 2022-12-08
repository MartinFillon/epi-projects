const express = require('express');
const path = require('path');
const coords = require("./src/coordinates.cjs");
const translation = require("./src/translation.cjs");
const scaling = require("./src/scaling.cjs");
const rotation = require("./src/rotation.cjs");
const matrix = require("./src/matrix.cjs");
const reflection = require("./src/reflection.cjs");
let utils = require("./src/utils.cjs");
let errors = require("./src/errors.cjs");
const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
});

app.get("/architect", (req, res) => {
    res.sendFile(path.join(__dirname, "public/architect.html"));
});

app.get("/pong", (req, res) => {
    res.sendFile(path.join(__dirname, "public/pong.html"));
});

app.get("/architect_calculus", (req, res) => {
    let coos = coords.set_coords(req.query.x, req.query.y);
    let translation_matrix = translation.set_translation(req.query.translation_x, req.query.translation_y);
    let scaling_matrix = scaling.set_scaling(req.query.scaling_x, req.query.scaling_y);
    let rotation_matrix = rotation.set_rotation(req.query.roation);
    let reflection_matrix = reflection.set_reflection(req.query.reflection);
    let final_matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    final_matrix = matrix.multiplication_third(translation_matrix, final_matrix);
    final_matrix = matrix.multiplication_third(scaling_matrix, final_matrix);
    final_matrix = matrix.multiplication_third(rotation_matrix, final_matrix);
    final_matrix = matrix.multiplication_third(reflection_matrix, final_matrix);
    let new_coos = matrix.set_new_position(final_matrix, coos);
    new_coos[0] = new_coos[0].toFixed(2);
    new_coos[1] = new_coos[1].toFixed(2);
    res.write(`Translation along vector (${req.query.translation_y}, ${req.query.translation_x})\n`);
    res.write(`Scaling by factors ${req.query.scaling_x} and ${req.query.scaling_y}\n`);
    res.write(`Rotation by a ${req.query.roation} degree angle\n`);
    res.write(`Reflection over an axis with an inclination angle of ${req.query.reflection} degrees\n`)
    res.write(`${final_matrix[0][0].toFixed(2)} ${final_matrix[0][1].toFixed(2)} ${final_matrix[0][2].toFixed(2)}`);
    res.write('\n');
    res.write(`${final_matrix[1][0].toFixed(2)} ${final_matrix[1][1].toFixed(2)} ${final_matrix[1][2].toFixed(2)}`);
    res.write('\n');
    res.write(`${final_matrix[2][0].toFixed(2)} ${final_matrix[2][1].toFixed(2)} ${final_matrix[2][2].toFixed(2)}`);
    res.write('\n');
    res.write(`(${coos[0].toFixed(2)}, ${coos[1].toFixed(2)}) => (${new_coos[0]}, ${new_coos[1]})`);
    res.end();
})

app.get("/pong_calculus", (req, res) => {
    let n = errors.check_n(req.query.n);
    let va = utils.setvect(req.query.x0, req.query.y0, req.query.z0);
    let vb = utils.setvect(req.query.x1, req.query.y1, req.query.z1);
    let speed = utils.speed_calc(va, vb);
    res.write("The velocity vector of the ball is:\n")
    res.write(`(${speed[0].toFixed(2)}, ${speed[1].toFixed(2)}, ${speed[2].toFixed(2)})\n`);
    utils.movement(vb, n, speed, res);
    utils.collide(vb, speed, res);
    res.end();
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Server listening on port ${port}`);
})