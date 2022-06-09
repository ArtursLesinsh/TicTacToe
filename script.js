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
            showMessage("Winner is" + symbol + " !");
        }
    };

    board.append(cell);
}

document.querySelector('.button').onclick = function (event) {
    event.preventDefault();
    resetGame();
};

document.querySelector('.background').onclick = function () {
    resetGame();
    hideMessage();
}

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

const message_bg = document.querySelector('.background');
const message_element = message_bg.querySelector('.message');
function showMessage (text) {
    message_bg.classList.add('show');
    message_element.textContent = text;
}

function hideMessage() {
    message_bg.classList.remove('show');
    message_element.textContent = "";
}

function resetGame () {
    for (let cell of board.children) {
        cell.textContent = '';
    }
        moves_count = 0;
}