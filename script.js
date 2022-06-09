const board = document.querySelector('.board');
const body = document.querySelector('body');
let moves_count = 0;

let reset = document.createElement('button');
reset.textContent = 'Reset';

for (let i = 1; i <= 9; i++) {
    let cell = document.createElement('a');
    cell.setAttribute('href', '#');
    cell.onclick = function() {
        if (this.textContent != '') {
            return;
        }
        moves_count++; 
        if(moves_count % 2 == 0) {
            this.textContent = 'o';  
        }
        else {
            this.textContent = 'x';  
        }
    };

    board.append(cell);
}

body.append(reset);