// Assume grid is square, and sizes are for a side
const GRIDSIZEINPIXELS = 400;
const MAXGRIDSIZEINCELLS = 100;
let   gridSizeInCells = 25;

addGridSquares(gridSizeInCells);
const resizeButton = document.querySelector('#resizeButton');
resizeButton.addEventListener('click', resizeGrid);

function addGridSquares(sideLengthInCells) {
    const gridContainer = document.querySelector('.container');
    const cellSizeInPixels = GRIDSIZEINPIXELS / sideLengthInCells;
    const gridStyleString = 
        `repeat(${sideLengthInCells}, ${cellSizeInPixels}px)`;
    gridContainer.style.gridTemplateColumns = gridStyleString;
    gridContainer.style.gridTemplateRows = gridStyleString;

    for(let i = 0; i < sideLengthInCells; i++) {
        for(let j = 0; j < sideLengthInCells; j++) {
            const div = document.createElement('div');
            div.style.border = '1px solid black';
            div.addEventListener('mouseover', (e) => 
                e.target.classList.add('coloredIn'));
            gridContainer.appendChild(div);
        }
    }
}

function resizeGrid() {
    const newSizeInCells = getUserInput();
    removeGridSquares();
    addGridSquares(newSizeInCells);
}

function removeGridSquares() {
    const gridDivs = document.querySelectorAll('.container div');
    gridDivs.forEach(gridDiv => gridDiv.remove());
}

function getUserInput() {
    let keepGoing = true;
    let newSizeInCells = 0;
    while(keepGoing) {
        newSizeInCells = 
            prompt(`Enter new grid size between 1 and ${MAXGRIDSIZEINCELLS}:`);
        newSizeInCells = Number(newSizeInCells);
        if(isNaN(newSizeInCells)
            || newSizeInCells > MAXGRIDSIZEINCELLS 
            || newSizeInCells <= 0) {
            keepGoing = true;
        } else {
            keepGoing = false;
        }
    }
    return newSizeInCells;
}