

/* External interactivity*/
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