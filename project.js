//Computer Play function. Will randomly return Rock, Paper or Scissors
function computerPlay() {
  let choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  return choice;
}

//Play round function. Recive two parameter (playerSelection and computerSelection and then return a string that declares the winner)
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") return "TIE";
  else if (playerSelection === "rock" && computerSelection === "scissors")
    return "You win! rock beats scissors";
  else if (playerSelection === "rock" && computerSelection === "paper")
    return "You Lose! Paper beats rock";
  else if (playerSelection === "paper" && computerSelection === "paper")
    return "TIE";
  else if (playerSelection === "paper" && computerSelection === "rock")
    return "You win! Paper beats rock";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    return "You Lose! Scissors beats Paper";
  else if (playerSelection === "scissors" && computerSelection === "scissors")
    return "TIE";
  else if (playerSelection === "scissors" && computerSelection === "paper")
    return "You Win! Scissors beats Paper";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    return "You Lose! Rock beats Scissors";
  else return "Error";
}

//game function. Loop 5 times the playRound function
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose rock, paper or scissors"
    ).toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
