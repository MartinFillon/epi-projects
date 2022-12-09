import * as fs from "./fs.js";
let fileData = fs.readFileSync("tmp/map.txt");
displayMap(fileData);

function displayMap(map) {
    document.querySelector('h1').innerHTML = map;
}

window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);
