//Computer Play function. Will randomly return Rock, Paper or Scissors
function computerPlay() {
  let choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  return choice;
}

console.log(computerPlay());
