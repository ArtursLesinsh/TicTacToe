const board = document.querySelector('.board');
    
for (let i = 1; i <= 9; i++) {
    let cell = document.createElement('a');
    cell.setAttribute('href', '#');
    board.append(cell);
}
