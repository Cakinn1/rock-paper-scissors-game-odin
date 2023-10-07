const winningConditions = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];
const strings = ["rock", "paper", "scissors"];
let player;
const arrayOfVariables = ["rock", "paper", "scissors"];

const documentAi = document.querySelector("#ai");
const documentPlayer = document.querySelector("#player");
const aiWon = document.querySelector("#ai-won");
const playerWon = document.querySelector(`#player-won`);
const tie = document.querySelector("#tie");
const max1 = document.querySelector(`#max`);
const round = document.querySelector(`#round`);
const didAiWinn = document.querySelector(`#did-ai-win`);
const title = document.querySelector(`header`);
const button = document.querySelectorAll("button");
const restartGaming = document.querySelector("#restart");

function computerPlay(gameVariables) {
  const random = Math.floor(Math.random() * gameVariables.length);
  return gameVariables[random];
}
title.innerHTML =
  "Welcome to the game," + " Can you beat the ai out of a best of 5";
title.style.paddingTop = "48px";

let didPlayerWin = 0;
let didAiWin = 0;
let score = 0;
let tieScore = 0;
let roundCounter = 0;
playerWon.innerHTML = "Your Score 0";
aiWon.innerHTML = "Ai Score 0";
tie.innerHTML = "Tie Score: 0";
round.innerHTML = "Rounds in counting, 0/5";
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay(strings);
  documentAi.innerHTML = `ai choice ${computerSelection}`;
  documentPlayer.innerHTML = `Your choice ${playerSelection}`;

  if (score === 4) {
    button.forEach((button) => {
      if (button.id !== "restart") {
        button.disabled = true;
      }
    });
  }

  if (roundCounter === 4 && didAiWin > didPlayerWin) {
    max1.innerHTML = `Ai has won!`;
  } else if (roundCounter === 4 && didPlayerWin > didAiWin) {
    max1.innerHTML = `You the player, has won!`;
  } else if (
    roundCounter === 4 &&
    tieScore > didPlayerWin &&
    tieScore > didAiWin
  ) {
    max1.innerHTML = `tie!`;
  } else if (
    roundCounter === 4 &&
    didPlayerWin > didAiWin &&
    didAiWin < tieScore
  ) {
    max1.innerHTML = `player has won more then tieing, He is will be granted victory!`;
  } else if (
    roundCounter === 4 &&
    didPlayerWin < tieScore &&
    didAiWin > didPlayerWin
  ) {
    max1.innerHTML = `Ai has won more then tieing, He is will be granted victory!`;
  }
  console.log(
    `tie score ${tieScore}, ai score ${didAiWin}, player score ${didPlayerWin}`
  );
  roundCounter <= 4 && roundCounter++,
    (round.innerHTML = `Rounds in counting, ${roundCounter}/5`);

  if (
    (computerSelection === strings[0] && playerSelection === strings[2]) ||
    (computerSelection === strings[1] && playerSelection === strings[0]) ||
    (computerSelection === strings[2] && playerSelection === strings[1])
  ) {
    didAiWin++;
    score++;
    aiWon.innerHTML = `Ai Score ${didAiWin}`;
  } else if (
    (playerSelection === strings[0] && computerSelection === strings[2]) ||
    (playerSelection === strings[1] && computerSelection === strings[0]) ||
    (playerSelection === strings[2] && computerSelection === strings[1])
  ) {
    didPlayerWin++;
    score++;
    playerWon.innerHTML = `Your Score ${didPlayerWin}`;
  } else {
    score++;
    tieScore++;
    tie.innerHTML = `Tie Score ${tieScore}`;
  }
}

function restartGame() {
  button.forEach((button) => (button.disabled = false));
  didPlayerWin = 0;
  didAiWin = 0;
  score = 0;
  tieScore = 0;
  roundCounter = 0;
  playerWon.innerHTML = "Your Score 0";
  aiWon.innerHTML = "Ai Score 0";
  round.innerHTML = "Rounds in counting, 0/5";
  max1.innerHTML = "";
  documentAi.innerHTML = "";
  documentPlayer.innerHTML = "";
}

