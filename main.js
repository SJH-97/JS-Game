import { wordsArr } from "./word-array.js";

// Initialising the game:
window.addEventListener("load", () => {
  document.querySelector("input").oninput = initialiseGame;
  document.querySelector("input").placeholder = "type 'start' to play";
  document.querySelector("#clock").innerHTML = "10s";
});

const initialiseGame = () => {
  const text = document.querySelector("input").value.toLowerCase();
  if (text == "start") {
    playGame();
    resetInputBox();
  }
};

// playGame -> Master function, calls sub-functions.
const playGame = () => {
  initialiseTimer();
  document.getElementById("word").innerHTML = randomWord;
};

// Word Array functionality

const randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];

// Countdown Timer functionality

let startTime = 10;
const initialiseTimer = () => {
  const countDownTimer = setInterval(() => {
    if (startTime <= 0) {
      clearInterval(countDownTimer);
      document.querySelector("input").placeholder = "Game Over!";
    } else {
      document.getElementById("clock").innerHTML = startTime + "s";
    }
    startTime -= 1;
  }, 1000);
};

// High Score Functionality
let score = 10;
let highScore = 10;

const updateScore = () => {
  if (score >= highScore) {
    document.getElementById("hscore").innerHTML = `High Score:${score}`;
  } else if (score < highScore) {
    return;
  } else {
    alert("error!");
  }
};
// updateScore();

// resetting input after typing correct word
const resetInputBox = () => {
  document.querySelector("input").value = "";
  document.querySelector("input").placeholder = "";
};
