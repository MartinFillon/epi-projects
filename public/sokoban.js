window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

function readSingleFile(e, map) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        map = e.target.result;
    }
    reader.readAsText(file);
    map[0] = 'A';
    return map;
}

function displayMap (content) {
    document.querySelector('h1').innerHTML = content
}
document.getElementById('file-input').addEventListener('change',  (e) => {
    let map = "[Map]";
    map = readSingleFile(e, map);
    displayMap(map);
}, false);