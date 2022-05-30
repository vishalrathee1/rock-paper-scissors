function computerPlay(){
    const choices=['r', 'p', 's'];
    return choices[Math.floor(Math.random()*3)];
}
//const playerChoice = prompt("Enter your Choice:");

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === 'r'&& computerSelection === 'p')
    return ("You Lose! Paper beats Rock");
    else if(playerSelection.toLowerCase() === 'r' && computerSelection==='s')
    return ("You Win! Rock beats Scissors");
    else if(playerSelection.toLowerCase() === 'p'&& computerSelection==='r')
    return ("You Win! Paper beats Rock");
    else if(playerSelection.toLowerCase()==='p'&& computerSelection==='s')
    return ("You Lose! Scissors beats Paper")
    else if(playerSelection.toLowerCase()==='s'&& computerSelection==='r')
    return ("You Lose! Rock beats Scissors");
    else if(playerSelection.toLowerCase()==='s'&& computerSelection==='p')
    return ("You Win! Scissors beats Paper");
    else
    return ("It's a tie.") 
}

const playerSelection=prompt("Enter your choice:");
const computerSelection= computerPlay();

function game(){
    for (let i=0; i<5; i++){
       console.log(playRound(playerSelection, computerSelection));
    }
}
//console.log(game());
game();
