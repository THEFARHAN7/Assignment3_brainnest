
const choices = ["rock", "paper", "scissors"];
    
    const playerSelection = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase(); 
    if(playerSelection ==="paper" , playerSelection ==="rock" , playerSelection ==="scissors" ){
        console.log("You chose " + `${playerSelection}`);
    } 
    else {
        console.log("Error! Try again!");
    }
    
     const computerSelection= Computerplay();
     function Computerplay(computerSelection)
     {
         computerSelection = choices[Math.floor(Math.random()*3)];
         console.log("Computer chose" + ` ${computerSelection}`);
         return computerSelection;
     }

         
    function playRound(playerSelection, computerSelection) 
    {
        if (playerSelection === 'rock' && computerSelection === 'paper') 
        {
            console.log('You lose! Paper beats Rock');
        } 
        else if (playerSelection === 'rock' && computerSelection === 'scissors') 
        {
            console.log('You win! Rock beats Scissors');
        }
        else if (playerSelection === 'rock' && computerSelection === 'rock') 
        {
            console.log('Draw');
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors');
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') 
        {
        console.log('You win! Scissors beats Paper');
        } 
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') 
        {
            console.log('Draw');
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') 
        {
        console.log('You win! Paper beats Rock');
        } 
        else if (playerSelection === 'paper' && computerSelection === 'scissors') 
        {
        console.log('You lose! Scissors beats Paper');
        } 
        else if (playerSelection === 'paper' && computerSelection === 'paper') 
        {
            console.log('Draw');
        }
        else if(playerSelection=== null){
        console.log('Try Again!!');
        }
    }
    let winner = playRound(playerSelection, computerSelection);
