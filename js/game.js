const GRIDHEIGHT = 16;
const GRIDWIDTH  = 16;

function addGridSquares(width, height) {
    const gridContainer = document.querySelector('.container');
    for(let i = 0; i < width; i++) {
        for(let j = 0; j < height; j++) {
            const div = document.createElement('div');
            div.style.border = '1px solid black';
            gridContainer.appendChild(div);
        }
    }
}

addGridSquares(GRIDHEIGHT, GRIDWIDTH);