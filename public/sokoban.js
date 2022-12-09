function displayMap(map) {
    document.querySelector('h1').innerHTML = map;
}

window.addEventListener('keydown', function (e) {
    check_key(e.key);
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

function check_key(key) {
    const allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    allowedKeys.forEach(elm => {
        if (key === elm)
            document.getElementById('key').innerHTML = `You pressed ${key}`;
    });
}
