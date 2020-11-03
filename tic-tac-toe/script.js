//selecting all the cells in the index file 
const X_class = 'x'
const Circle_class = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn;

//loop
//everytime we click on the cell we want to add
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true}) //once we click on the cell its not going to fire again
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? Circle_class : X_class
    placeMark(cell, currentClass)
    //check for win
    //check for draw
    //switch turns
    swapTurns()
    setBoardHoverClass()
}

placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_class)
    board.classList.remove(Circle_class)
    if (circleTurn) {
        board.classList.add(Circle_class)
    } else {
        board.classList.add(X_class)
    }
}