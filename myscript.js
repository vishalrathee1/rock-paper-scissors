let userScore=0;
let compScore=0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let result_div = document.querySelector('.result');
let rock_id = document.getElementById('r')
let paper_id = document.getElementById('p')
let scissors_id = document.getElementById('s')

function computerPlay(){
    const choices=['r', 'p', 's'];
    return choices[Math.floor(Math.random()*3)];
}
//const playerChoice = prompt("Enter your Choice:");

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'r'&& computerSelection === 'p'){
        compScore++;
        compScore_span.innerText=compScore;
        if(compScore===5){
            result_div.innerText = "Computer Wins! Game Over!";
            compScore=0;
            userScore=0;
            userScore_span.innerText=userScore;
            compScore_span.innerText=compScore;}
        else {result_div.innerText="You Lose! Paper beats Rock";}
    return ("You Lose! Paper beats Rock");
    }
    else if(playerSelection === 'r' && computerSelection==='s'){
        userScore++;
        userScore_span.innerText=userScore;
        if(userScore===5){
            result_div.innerText = "You Win!!!";
            compScore=0;
            userScore=0;
            userScore_span.innerText=userScore;
            compScore_span.innerText=compScore;}
        else {result_div.innerText="You Win! Rock beats Scissors";}
    return ("You Win! Rock beats Scissors");
    }
    else if(playerSelection === 'p'&& computerSelection==='r'){
        userScore++;
        userScore_span.innerText=userScore;
        if(userScore===5){
            result_div.innerText = "You Win!!!";
            compScore=0;
            userScore=0;
            userScore_span.innerText=userScore;
            compScore_span.innerText=compScore;}   
        else {result_div.innerText="You Win! Paper beats Rock";}
    return ("You Win! Paper beats Rock");
    }
    else if(playerSelection ==='p'&& computerSelection==='s'){
        compScore++;
        compScore_span.innerText=compScore;
        if(compScore===5){
            result_div.innerText = "Computer Wins! Game Over!";
            compScore=0;
            userScore=0;
            userScore_span.innerText=userScore;
            compScore_span.innerText=compScore;}
        else {result_div.innerText="You Lose! Scissors beats Paper";}
    return ("You Lose! Scissors beats Paper")
    }
    else if(playerSelection ==='s'&& computerSelection==='r'){
        compScore++;
        compScore_span.innerText=compScore;
        if(compScore===5){
            result_div.innerText = "Computer Wins! Game Over!";
            compScore=0;
            userScore=0;
            userScore_span.innerText=userScore;
            compScore_span.innerText=compScore;}
        else {result_div.innerText="You Lose! Rock beats Scissors";}
    return ("You Lose! Rock beats Scissors");
    }
    else if(playerSelection ==='s'&& computerSelection==='p'){
        userScore++;
        userScore_span.innerText=userScore;
        if(userScore===5){
            result_div.innerText = "You Win!!!";
            compScore=0;
            userScore=0;
            userScore_span.innerText=userScore;
            compScore_span.innerText=compScore;}
        else{ result_div.innerText="You Win! Scissors beats Paper";}
    return ("You Win! Scissors beats Paper");
    }
    else{
        result_div.innerText="It's a tie.";
    return ("It's a tie.") 
    }
}

// const computerSelection= computerPlay();

// function game(){

//     console.log(playRound(playerSelection, computerSelection));
    
// }
// //console.log(game());
// game();

rock_id.addEventListener('click', function(){
    const playerSelection='r';
    const computerSelection=computerPlay();
    console.log(playRound(playerSelection,computerSelection));
})

paper_id.addEventListener('click', function(){
    const playerSelection='p';
    const computerSelection=computerPlay();
    console.log(playRound(playerSelection,computerSelection));
})

scissors_id.addEventListener('click', function(){
    const playerSelection='s';
    const computerSelection=computerPlay();
    console.log(playRound(playerSelection,computerSelection));
})

// result_div.setAttribute = {"style": "font-size : 40px" }