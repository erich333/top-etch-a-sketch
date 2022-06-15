// Assume grid is square, and sizes are for a side
const GRIDSIZEINPIXELS = 400;
let   defaultGridSizeInCells = 25;

function addGridSquares(sideLengthInCells) {
    const gridContainer = document.querySelector('.container');
    const cellSizeInPixels = GRIDSIZEINPIXELS / sideLengthInCells;
    
    const gridStyleString = `repeat(${sideLengthInCells}, ${cellSizeInPixels}px)`;
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

addGridSquares(defaultGridSizeInCells);