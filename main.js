import { wordsArr } from "./word-array.js";

//Default screen
document.querySelector("input").placeholder = "type 'start' to play";
document.querySelector("#clock").innerHTML = "10s";

//Initialising the game
window.addEventListener("load", () => {
  document.querySelector("input").oninput = initialiseGame;
});

const initialiseGame = () => {
  const text = document.querySelector("input").value.toLowerCase();
  if (text == "start") {
    getRandomWord();
    resetInputBox();
    initialiseTimer();
    document.getElementById("resetgame").innerHTML = "";
  }
};

//If player correctly types-in the random word from the array -> clear the input box then give them a new word, add 1 second to the timer and add 1 to the current score.
let inputBox = document.querySelector("input");
const compareWords = (value) => {
  wordsArr.forEach((word) => {
    if (word === value) {
      getRandomWord();
      resetInputBox();
      startTime += 1;
      score += 1;
      currentScore();
    }
  });
};

inputBox.addEventListener("keyup", () => {
  compareWords(inputBox.value);
  if (inputBox.value === "start") {
    initialiseGame();
  }
});

//Word Array functionality
const getRandomWord = () => {
  const randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  document.getElementById("word").innerHTML = randomWord;
};

//Countdown Timer functionality
let startTime = 10;
const initialiseTimer = () => {
  const countDownTimer = setInterval(() => {
    if (startTime <= 0) {
      clearInterval(countDownTimer);
      resetGame();
    } else {
      document.getElementById("clock").innerHTML = startTime + "s";
    }
    startTime -= 1;
  }, 1000);
};

//Current Score & High Score Functionality
let score = 0;
let highScore = 0;

const currentScore = () => {
  document.getElementById("cscore").innerHTML = `Score: ${score}`;
};

const updateScore = () => {
  if (score >= highScore) {
    document.getElementById("hscore").innerHTML = `High Score: ${score}`;
  } else if (score < highScore) {
    return;
  } else {
    alert("error!");
  }
};

//Resetting the input box
const resetInputBox = () => {
  document.querySelector("input").value = "";
  document.querySelector("input").placeholder = "";
};

//Resetting the game
const resetGame = () => {
  document.getElementById("cscore").innerHTML = `Score:`;
  updateScore();
  resetInputBox();
  score = 0;
  document.querySelector("#word").innerHTML = "Game Over! ";
  document.getElementById("clock").innerHTML = "";
  document.getElementById("resetgame").innerHTML = "type 'start' to play again";

  startTime = 10;
};
