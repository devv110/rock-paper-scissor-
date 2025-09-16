// assign values to rock paper and scissors
// generate random integer
// plug integer in to computer choice function
// create user choice function
// create if statements for each win condition and draw
// display win draw or lose - win can be true lose can be false


function getComputerChoice() {
function getRandomInteger(min, max) {

  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomInt = getRandomInteger (1, 3);
if( randomInt === 1) {
    return 'rock'; }
else if (randomInt === 2) {
    return 'paper'; }
else if (randomInt === 3){
    return 'scissors'; }
}
let computerChoice = getComputerChoice();
console.log(computerChoice);
function getHumanChoice() {
  let choice = prompt("Enter your choice(rock,paper or scissors): ");
  return choice;
};
let humanChoice = getHumanChoice();
if (humanChoice =='rock')
    console.log('rock')
else if (humanChoice =='paper')
    console.log('paper')
else if (humanChoice =='scissors')
    console.log('scissors');


let humanScore = 0;
let computerScore =0;

function playRound (humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
        console.log("Draw!");
   } else if (humanChoice =='paper'&&computerChoice =='rock')
       { console.log('You win');
        humanScore++;}
     else if (humanChoice =='rock'&&computerChoice =='scissors')
       { console.log('You win');
        humanScore++;
     }
     else if (humanChoice =='scissors'&&computerChoice =='paper')
       { console.log('You win');
        humanScore++;
       }
     else if (humanChoice =='paper'&&computerChoice =='scissors')
     {console.log('You Lose');
        computerScore++;
     }
     else if (humanChoice =='rock' &&computerChoice =='paper')
     {console.log('You Lose');
        computerScore++;
     }
     else if (humanChoice =='scissors' &&computerChoice =='rock')
     {console.log('You Lose');
        computerScore++;
     }
     }
playRound (humanChoice, computerChoice);
console.log('Human:'+humanScore);
console.log('Robot:'+computerScore);



 






