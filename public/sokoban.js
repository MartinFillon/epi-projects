window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
}, false);

function readSingleFile(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        displayMap(e.target.result);
    }
    reader.readAsText(file);
}



function displayMap (content) {
    document.querySelector('h1').innerHTML = content
}
let map = undefined;
document.getElementById('file-input').addEventListener('change',  (e, map) => {
    readSingleFile(e);
    map = "This is map"
    document.querySelector('h2').innerHTML = map;
}, false);