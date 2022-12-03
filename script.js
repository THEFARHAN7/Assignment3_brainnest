console.log("==ROCK PAPER SCISSORS GAME==")
function computerPlay() {
    let items = ["rock", "paper", "scissors"]
      let item = items[Math.floor(Math.random()*items.length)];
      console.log ('Computer Choose', item)
        return item
}
function userPlay() {
    let option = prompt("Please select rock paper or scissors");
    let result = option.toLowerCase();
    result= result.trim()
    if (result== "rock" || result=="paper" || result=="scissors"){
        console.log ('You Choose', result)
        return result
    }else{
        console.log("Try Again!! Invalid Input")
        return userPlay()
    }
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
       console.log ('Draw');
       return "Draw"
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log ('Computer Win');
            return "Computer Win"            
        }else{
            console.log ('You Win');
            return "You Win"       
        }  
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log ('Computer Win');
            return "Computer Win"       
        }else{
            console.log ('You Win');
            return "You Win"
        }
    }        
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
             console.log ('Computer Win');
             return "Computer Win"
        }else{
            console.log ('You Win');
            return "You Win"
        }
    }   
}

function game(){
    let computerScore = 0
    let playerScore =  0
    for (index=1; index<=5; index++)
    {
        const playerSelection= userPlay() 
        const computerSelection= computerPlay() 
        const play = playRound(playerSelection, computerSelection)
        
        
        if (play==="Computer Win"){
            computerScore = computerScore + 1;
            console.log("Computer Score", computerScore)
            console.log("========")
        }else if (play==="You Win"){
            playerScore= playerScore + 1;
            console.log("Player Score", playerScore)
            console.log("========")
        }else{
            console.log("Its a Tie: Your Score", playerScore, "Computer Score", computerScore)
            console.log("========")
        }  
    }
    if(computerScore > playerScore){
        return "Computer Win"
    } else{
        return "You Won"
    }
}
const winner= game()   
   console.log("Winner of the game",winner) 
