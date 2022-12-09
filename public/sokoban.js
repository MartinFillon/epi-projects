function displayMap(map) {
    document.querySelector('h1').innerHTML = map;
}

function display2dMap(map) {
    document.querySelector('h1').innerHTML = "";
    for (let x = 0; x < map.length - 1; x++) {
        for (let y = 0; y < map[x].length; y++) {
            if (map[x][y] !== undefined) {
                document.querySelector('h1').innerHTML += map[x][y];
            }
        }
    }
}

function displayPlayerPosition(playerPosition) {
    document.querySelector('h3').innerHTML = JSON.stringify(playerPosition);
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
            let playerPosition = getPlayerPosition(map_2d);
            displayPlayerPosition(playerPosition);
            move_player(map_2d, key, playerPosition);
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

function getPlayerPosition(map) {
    let px = -1;
    let py = -1;
    for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map[x].length; y++) {
            if (map[x][y] === 'P') {
                px = x;
                py = y;
            }
        }
    }
    return {
        x: px,
        y: py
    }
}

function move_player(map_2d, key, playerPosition) {
    let map = map_2d;
    if (key === "ArrowUp" && map[playerPosition.x - 1][playerPosition.y] === ' ') {
        map[playerPosition.x--][playerPosition.y] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        display2dMap(map);
    }
    if (key === "ArrowUp" && map[playerPosition.x - 1][playerPosition.y] === 'X' && map[playerPosition.x - 2][playerPosition.y] === ' ') {
        map[playerPosition.x--][playerPosition.y] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        map[playerPosition.x - 1][playerPosition.y] = 'X';
        display2dMap(map);
    }
    if (key === "ArrowDown" && map[playerPosition.x + 1][playerPosition.y] === ' ') {
        map[playerPosition.x++][playerPosition.y] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        display2dMap(map);
    }
    if (key === "ArrowDown" && map[playerPosition.x + 1][playerPosition.y] === 'X' && map[playerPosition.x + 2][playerPosition.y] === ' ') {
        map[playerPosition.x++][playerPosition.y] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        map[playerPosition.x + 1][playerPosition.y] = 'X';
        display2dMap(map);
    }
    if (key === "ArrowLeft" && map[playerPosition.x][playerPosition.y - 1] === ' ') {
        map[playerPosition.x][playerPosition.y--] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        display2dMap(map);
    }
    if (key === "ArrowLeft" && map[playerPosition.x][playerPosition.y - 1] === 'X' && map[playerPosition.x][playerPosition.y - 2] === ' ') {
        map[playerPosition.x][playerPosition.y--] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        map[playerPosition.x][playerPosition.y - 1] = 'X';
        display2dMap(map);
    }
    if (key === "ArrowRight" && map[playerPosition.x][playerPosition.y + 1] === ' ') {
        map[playerPosition.x][playerPosition.y++] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        display2dMap(map);
    }
    if (key === "ArrowRight" && map[playerPosition.x][playerPosition.y + 1] === 'X' && map[playerPosition.x][playerPosition.y + 2] === ' ') {
        map[playerPosition.x][playerPosition.y++] = ' ';
        map[playerPosition.x][playerPosition.y] = 'P';
        map[playerPosition.x][playerPosition.y + 1] = 'X';
        display2dMap(map);
    }
    return map;
}
