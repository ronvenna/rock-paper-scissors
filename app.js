// Cache the DOM
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('user-score');
const gameResult = document.getElementById('game-result');
const computerScore = document.getElementById('computer-score');
// Helper Functions
const titleCase = str => str.charAt(0).toUpperCase() + str.substring(1, str.length);
// Game Functions
const won = (move, computerSelection) => {
  gameResult.classList.remove('display');
  setTimeout(() => {
    gameResult.innerText = `${titleCase(move)} beats ${titleCase(computerSelection)}, you win 🔥.`;
    // ease in
    gameResult.classList.add('display')
    // Update the score
    userScore.innerText = parseInt(userScore.innerText) + 1
  }, 500);
};

const lost = (move, computerSelection) => {
  gameResult.classList.remove('display');
  setTimeout(() => {
    gameResult.innerText = `${titleCase(computerSelection)} beats ${titleCase(move)}, you lost 😞.`;
    // ease in
    gameResult.classList.add('display')
    // Update the score
    computerScore.innerText = parseInt(computerScore.innerText) + 1
  }, 500);
};

const draw = (move) => {
  gameResult.classList.remove('display');
  setTimeout(() => {
    gameResult.innerText = `Computer picked ${titleCase(move)} too, which resulted in a draw.`;
    // ease in
    gameResult.classList.add('display')
  }, 500);
};

const getComputerSelection = () => {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random(0, 1) * 3)];
};

const userSelection = (move) => () => {
  const computerSelection = getComputerSelection();
  const losingRules = {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock',
  };
  if(computerSelection === move) return draw(move);
  if(losingRules[move] === computerSelection) return lost(move, computerSelection)
  return won(move, computerSelection)
}
// Click listeners
rock.addEventListener('click', userSelection('rock'))
paper.addEventListener('click', userSelection('paper'))
scissors.addEventListener('click', userSelection('scissors'))
