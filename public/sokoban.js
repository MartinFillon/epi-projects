function displayMap(map) {
    document.querySelector('h1').innerHTML = map;
}

window.addEventListener('keydown', function (e) {
    let fileData = fs.readFileSync("tmp/map.txt");
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    displayMap(fileData);
}, false);
