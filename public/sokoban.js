function displayMap(map) {
    document.querySelector('h1').innerHTML = map;
}

function display2dMap(map) {
    document.querySelector('h2').innerHTML = "\n";
    for (let x = 0; x < map.length - 1; x++) {
        for (let y = 0; y < map[x].length; y++) {
            if (map[x][y] !== undefined) {
                document.querySelector('h2').innerHTML += map[x][y];
            }
        }
    }
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
        if (key === elm) {
            document.getElementById('key').innerHTML = `You pressed ${key}`;
            let map = document.getElementById('map').innerHTML;
            let map_2d = get_2d_map(map);
            display2dMap(map_2d);
        }
    });
}

function get_2d_map(map) {
    let max_col = 0;
    let col = 0;
    let row = 0;
    for (let i = 0; i < map.length; i++) {
        col += 1;
        if (map[i] === '\n') {
            max_col = (max_col < col) ? col : max_col;
            col = 0;
            row += 1;
        }
    }
    let k = 0;
    let map_2d = new Array(row);
    for (let x = 0; x < max_col; x++) {
        map_2d[x] = new Array(max_col);
        for (let y = 0; y < max_col; y++) {
            map_2d[x][y] = map[k];
            if (map[k++] === '\n') {
                break;
            }
        }
    }
    return map_2d;
}
