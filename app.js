const winningConditions = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];
const strings = ["rock", "paper", "scissors"];
let player;

function computerPlay(strings1) {
  const random = Math.floor(Math.random() * strings1.length);
  return strings1[random];
}
computerPlay(strings);
player = prompt(
  "This is life or death... You have 5 Games, will you win. Enter "
).toLowerCase();

let didPlayerWin = 0;
let didAiWin = 0;

function game(playerSelection, computerSelection) {
  computerSelection = computerPlay(strings);
  playerSelection = player;
  console.log(`ai chose: ${computerSelection}`);
  console.log(`You chose: ${playerSelection}`);
  if (
    (computerSelection === strings[0] && playerSelection === strings[2]) ||
    (computerSelection === strings[1] && playerSelection === strings[0]) ||
    (computerSelection === strings[2] && playerSelection === strings[1])
  ) {
    didAiWin++;
    console.log("AI has won");
  } else if (
    (playerSelection === strings[0] && computerSelection === strings[2]) ||
    (playerSelection === strings[1] && computerSelection === strings[0]) ||
    (playerSelection === strings[2] && computerSelection === strings[1])
  ) {
    didPlayerWin++;
    console.log("Player Has Won");
  } else if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    console.log(
      `The world depended on you... & you can't even spell rock, paper or scissors right...`
    );
  } else {
    console.log("tie");
  }
  console.log('\n');
}

function finishedGame() {
  for (let i = 1; i <= 5; ++i) {
    console.log(`Round ${i}`);
    console.log(`Ai has Won ${didAiWin} times`);
    console.log(`Player has Won ${didPlayerWin} times`);
    game();
    if (i === 5 && didAiWin > didPlayerWin) {
      console.log(`You have lost to an ai... ai has won ${didAiWin} times`);
    } else if (i === 5 && didPlayerWin > didAiWin) {
      console.log(`You are the champion You have won ${didPlayerWin} times`);
    }
  }
}

finishedGame();
