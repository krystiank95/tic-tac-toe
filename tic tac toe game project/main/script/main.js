
let playerMove = 'X';
let computerMove = 'O';

let playerWins = 0;
let playerLose = 0;
let draw = 0;

document.addEventListener('click', playerRound);

//player move adding X on clicked field
function playerRound(){
    let cell = event.target;
    console.log(cell)
    if(!cell.innerHTML){
        cell.innerHTML = playerMove;
        results();
        setTimeout(computerRound,1000);
    } else{alert('that field is already used')}

};
//computer move generating random number from 1 to 9 and assign generated number to the field on field game
function computerRound(){
    let randomRowID = Math.floor(Math.random()*9)+1;
    let cell = document.getElementById(randomRowID);
    console.log(cell);
    if(cell && !cell.innerHTML){
        cell.innerHTML = computerMove;
    } else{computerRound()};
    results();
};

function results(){
  let cells = document.querySelectorAll('.field')


  //row check
  for (let i = 0; i < cells.length; i += 3) {
    if (
        cells[i].innerHTML !== '' &&
        cells[i].innerHTML === cells[i + 1].innerHTML &&
        cells[i].innerHTML === cells[i + 2].innerHTML
    ) 
    {
        let winner = cells[i].innerHTML
        alert(`${winner} won`);
        if(winner === 'X') {
            playerWins ++;
           
        }
         if(winner === 'O'){
            playerLose ++;
      }
        updateScore();
        clearFields();
    }
    }
//column check
for (let i = 0; i < 3; i++) {
    if (
        cells[i].innerHTML !== '' &&
        cells[i].innerHTML === cells[i + 3].innerHTML &&
        cells[i].innerHTML === cells[i + 6].innerHTML
    ) {
        let winner = cells[i].innerHTML;
        alert(`${winner} won`);  
        if(winner === 'X') {
            playerWins ++;
        }
         if(winner === 'O'){
            playerLose ++;
      }
        updateScore();
        clearFields();
    }
  }

//cross check from left top 
if (
    cells[0].innerHTML !== '' &&
    cells[0].innerHTML === cells[4].innerHTML &&
    cells[0].innerHTML === cells[8].innerHTML
) {
    let  winner = cells[0].innerHTML
    alert(`${winner} won`);
    if(winner === 'X') {
        playerWins ++;
    }
     if(winner === 'O'){
        playerLose ++;
  }
    updateScore();
    clearFields();
}
//cross check from right top
if (
    cells[2].innerHTML !== '' &&
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[2].innerHTML === cells[6].innerHTML
) {
    let winner = cells[2].innerHTML;
    alert(`${winner} won`);
    if(winner === 'X') {
        playerWins ++;
    }
     if(winner === 'O'){
        playerLose ++;
   
  }
    updateScore();
    clearFields();
}

//draw
if (document.querySelectorAll('.field:not(:empty)').length === 9) {
    alert('It\'s a draw!');
    draw++;
    updateScore();
    clearFields();
}
}


function clearFields(){
   let fields = document.querySelectorAll('.field');
   fields.forEach(field => {
    field.innerHTML = '';
   }); 
}


function updateScore(){
    document.querySelector('.js-score').innerHTML = ` win:${playerWins}  lose:${playerLose} draw:${draw}`
}
