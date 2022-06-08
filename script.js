const board = document.querySelector('.board');

for (let i = 1; i <= 9; i++) {
    let cell = document.createElement('a');
    cell.setAttribute('href', '#');
    cell.onclick = function() {
        this.textContent = 'x';
    };
    board.append(cell);
}