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
    let content = file.text();
    content[0] = 'E';
    displayMap(content);
}
function displayMap (content) {
    document.querySelector('h1').innerHTML = content
}
document.getElementById('file-input').addEventListener('change', readSingleFile, false);