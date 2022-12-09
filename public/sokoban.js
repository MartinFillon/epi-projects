const fs = require("fs");

window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

function readSingleFile(e) {
    let file = e.target.files[0];
    return fs.readFileSync(file);
}

function displayMap (content) {
    document.querySelector('h1').innerHTML = content
}

document.getElementById('file-input').addEventListener('change',  (e) => {
    let map = "[Map]";
    map = readSingleFile(e);
    displayMap(map);
}, false);