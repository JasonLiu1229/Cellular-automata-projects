function make2DArray(cols, rows) {
    let arr = new Array(cols);
    /* Make a 2D array and init every cell to 0*/
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

let grid;
let cols, rows;
let resolution = 4;

function nextGeneration(grid) {
    cols = grid.length;
    rows = grid[0].length;
    let next = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let current = grid[i][j];
            if (current === 1) {
                if (j+1 > rows) {
                    continue;
                }
                let below = grid[i][j + 1];
                let move = (random([-1,0,1]));

                next[i][j] = 0;

                let belowA, belowB;

                if (i + move < cols && i + move >= 0) {
                    belowA = grid[i + move][j + 1];
                }
                if (i + move + 1 < cols && i + move + 1 >= 0) {
                    belowB = grid[i + move + 1][j + 1];
                }

                if (j + 1 < rows) {
                    if (below === 0) {
                        next[i][j + 1] = 1;
                    } else {
                        if (belowA === 0) {
                            next[i + move][j + 1] = 1;
                        } else if (belowB === 0) {
                            next[i + move + 1][j + 1] = 1;
                        } else {
                            next[i][j] = 1;
                        }
                    }
                } else {
                    next[i][j] = 1;
                }
            }
        }
    }
    return next;
}

/* External interactivity*/
function mouseDragged() {
    let i = floor(mouseX / resolution);
    let j = floor(mouseY / resolution);
    if (i >= 0 && i < cols && j >= 0 && j < rows) {
        grid[i][j] = 1;
    }
}

function keyPressed() {
    /* Clear board */
    if (key === 'c') {
        grid = make2DArray(cols, rows);
    }
}

/* Run functions */
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const BACKGROUND_COLOR = 220;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
}

function draw() {
    background(BACKGROUND_COLOR);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] === 1) {
                fill(0);
                rect(x, y, resolution, resolution);
            }
        }
    }

    grid = nextGeneration(grid);
}