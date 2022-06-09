const board = document.querySelector('.board');
let moves_count = 0;

for (let i = 0; i = 9; i++) {
    let cell = document.createElement('a');
    cell.setAttribute('href', '#');
    cell.onclick = function(event) {
        event.preventDefault();
        if (this.textContent != '') {
            return;
        } 
        let symbol = 'o';
        if(moves_count++ % 2 == 0) {
            symbol = 'x';  
        }
        this.textContent = symbol;

        if (checkWinner(symbol)) {
            document.querySelector('.message').textContent = "Winner is" + symbol + " !";
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

const win_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(symbol) {
    for (let combination of win_combination) {
        if (
            board.children[combination[0]].textContent == symbol &&
            board.children[combination[1]].textContent == symbol &&
            board.children[combination[2]].textContent == symbol
        ) {
            return true;
        }
    }
    return false;
}