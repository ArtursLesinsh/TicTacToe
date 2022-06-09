const board = document.querySelector('.board');
let moves_count = 0;

for (let i = 1; i <= 9; i++) {
    let cell = document.createElement('a');
    cell.setAttribute('href', '#');
    cell.onclick = function(event) {
        event.preventDefault();
        if (this.textContent != '') {
            return;
        } 
        if(moves_count++ % 2 == 0) {
            this.textContent = 'x';  
        }
        else {
            this.textContent = 'o';  
        }
    };

    board.append(cell);
}

document.querySelector('.button').onclick = function (event) {
    event.preventDefault();
    for (let cell of board.children) {
        cell.textContent = '';
    }
    moves_count = 0;
};