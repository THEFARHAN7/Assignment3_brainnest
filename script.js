function game()
{
    const choices = ["rock", "paper", "scissors"];
    //COMPUTER INPUT
    const computerSelection= Computerplay();
    function Computerplay(computerSelection)
    {
        computerSelection = choices[Math.floor(Math.random()*3)];
        console.log("Computer chose" + ` ${computerSelection}`);
        return computerSelection;
    }
    //USER INPUT
    const playerSelection = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase(); 
        if(playerSelection ==="paper" , playerSelection ==="rock" , playerSelection ==="scissors" ){
            console.log("You chose " + `${playerSelection}`);
        } else {
            console.log("Error! Try again!");
        }
        if (input === null) {
            return;
        }

        //WINNER 
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
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors');
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') 
        {
        console.log('You win! Scissors beats Paper');
        } 
        else if (playerSelection === 'paper' && computerSelection === 'rock') 
        {
        console.log('You win! Paper beats Rock');
        } 
        else if (playerSelection === 'paper' && computerSelection === 'scissors') 
        {
        console.log('You lose! Scissors beats Paper');
        } 
        else {
        console.log('Its a Tie!!');
        }
    }
    const winner = playRound(playerSelection, computerSelection);
}
for(let i=0;i<5;i++);
    {
        game();
    }