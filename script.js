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

let humanScore = 0;
let computerScore =0;

const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#finalResult");

function playRound (humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();
let resultText = "";

  if (humanChoice === computerChoice) {
        resultText = 'Draw!';
   } else if (
    (humanChoice =='paper'&&computerChoice =='rock') ||
    (humanChoice =='rock'&&computerChoice =='scissors') ||
    (humanChoice =='scissors'&&computerChoice =='paper')
   )  { 
       resultText = 'You Win!';
       humanScore++;
   } else if (
     (humanChoice =='paper'&&computerChoice =='scissors') ||
     (humanChoice =='rock' &&computerChoice =='paper') ||
     (humanChoice =='scissors' &&computerChoice =='rock')
     ) {
       resultText = ('You Lose');
       computerScore++;
     }
              if (humanScore + computerScore === 5) {
      if (humanScore > computerScore) {
        finalResult.textContent = "🎉 You won the best of 5!";
      } else if (humanScore < computerScore) {
        finalResult.textContent = "💻 Computer won the best of 5!";
      } else {
        finalResult.textContent = "🤝 It's a tie!";
      }
    }
     return resultText;
    }
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const humanChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const resultText = playRound(humanChoice, computerChoice);
     roundResult.textContent = resultText;
     score.textContent = `Human: ${humanScore} — Computer: ${computerScore}`;
  });
});





