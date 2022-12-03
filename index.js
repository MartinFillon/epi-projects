const express = require('express');
const path = require('path');
const coords = require("./src/coordinates.cjs");
const translation = require("./src/translation.cjs");
const scaling = require("./src/scaling.cjs");
const rotation = require("./src/rotation.cjs");
const matrix = require("./src/matrix.cjs");
const reflection = require("./src/reflection.cjs");
const port = 3000;
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/calculus", (req, res) => {
    let coos = coords.set_coords(req.body.x, req.body.y);
    let translation_matrix = translation.set_translation(req.body.translation_x, req.body.translation_y);
    let scaling_matrix = scaling.set_scaling(req.body.scaling_x, req.body.scaling_y);
    let rotation_matrix = rotation.set_rotation(req.body.roation);
    let reflection_matrix = reflection.set_reflection(req.body.reflection);
    let final_matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    final_matrix = matrix.multiplication_third(translation_matrix, final_matrix);
    final_matrix = matrix.multiplication_third(scaling_matrix, final_matrix);
    final_matrix = matrix.multiplication_third(rotation_matrix, final_matrix);
    final_matrix = matrix.multiplication_third(reflection_matrix, final_matrix);
    let new_coos = matrix.set_new_position(final_matrix, coos);
    new_coos[0] = new_coos[0].toFixed(2);
    new_coos[1] = new_coos[1].toFixed(2);
    res.write(`Translation along vector (${req.body.translation_y}, ${req.body.translation_x})\n`);
    res.write(`Scaling by factors ${req.body.scaling_x} and ${req.body.scaling_y}\n`);
    res.write(`Rotation by a ${req.body.roation} degree angle\n`);
    res.write(`Reflection over an axis with an inclination angle of ${req.body.reflection} degrees\n`)
    res.write(`${final_matrix[0][0].toFixed(2)} ${final_matrix[0][1].toFixed(2)} ${final_matrix[0][2].toFixed(2)}`);
    res.write('\n');
    res.write(`${final_matrix[1][0].toFixed(2)} ${final_matrix[1][1].toFixed(2)} ${final_matrix[1][2].toFixed(2)}`);
    res.write('\n');
    res.write(`${final_matrix[2][0].toFixed(2)} ${final_matrix[2][1].toFixed(2)} ${final_matrix[2][2].toFixed(2)}`);
    res.write('\n');
    res.write(`(${coos[0].toFixed(2)}, ${coos[1].toFixed(2)}) => (${new_coos[0]}, ${new_coos[1]})`);
    res.end();
})

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})