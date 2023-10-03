var counter = 0
var cells = document.querySelectorAll('#game_table td');
var header = document.getElementById('game_name')
var counter_x = 0
var counter_o = 0
var counter_draw = 0

function updateScores() {
    var xWinsElement = document.getElementById('xWins');
    var oWinsElement = document.getElementById('oWins');
    var drawsElement = document.getElementById('draws');

    xWinsElement.textContent = counter_x;
    oWinsElement.textContent = counter_o;
    drawsElement.textContent = counter_draw;
}

function isEnder() {
    if (counter < 4) {
        return false
    }
    // rows
    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != '') {
        return true
    }
    if (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '') {
        return true
    }
    // columns
    if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '') {
        return true
    }
    if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '') {
        return true
    }
    // diagonals
    if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '') {
        return true
    }
    if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '') {
        return true
    }
    if (counter > 7) {
        header.innerHTML = 'Draw!'
        counter_draw+=1
        updateScores();
        resetTheColor()
        return false
    }
}

function resetTheColor(){
    var container = document.getElementById('game_start')
    container.style.backgroundColor='#CFFF6B'
    container.style.color = 'black'
    container.style.border = '1px solid #4F5151'
}

function cellClick(){
     var img = document.createElement('img')
     if(counter % 2 == 0){
        img.src = 'x.png'
        img.style.width = '65%'
     } else {
        img.src = 'circle.png'
        img.style.width = '100%'
     }
     this.appendChild(img)
     if(isEnder()){
        for(var cell of cells){
            cell.removeEventListener('click', cellClick)
        }
        if(counter % 2 == 0){
            header.innerHTML = 'X is winner!'
            counter_x +=1
            updateScores();
            resetTheColor();
        } else {
            header.innerHTML = 'O is winner!'
            counter_o +=1
            updateScores();
            resetTheColor();
        }
     }
     counter +=1
     this.removeEventListener('click', cellClick)
}

function changeColor(){
    var container = document.getElementById('game_start')
    container.style.backgroundColor='black'
    container.style.color = 'white'
    container.style.border = '1px solid #CFFF6B'
}

function startGame() {
    changeColor();
    counter = 0;
    header.innerHTML = 'Tic-Tac-Toe'
    for (var cell of cells) {
        cell.innerHTML = ''
        cell.addEventListener('click', cellClick)
    }
}
