function displayMap(map) {
    document.querySelector('h1').innerHTML = map;
}

window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

document.getElementById("file-input").addEventListener('change', readSingleFile, false);

function readSingleFile(e) {
    let file = e.target.files[0];
    if (!file) {
        return
    }
    let reader = new FileReader();
    reader.onload = function (e) {
        let contents = e.target.result;
        displayMap(contents);
    };
    reader.readAsText(file);
}
