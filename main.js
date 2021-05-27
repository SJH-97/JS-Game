import { wordsArr } from "./word-array.js";

//default screen
document.querySelector("input").placeholder = "type 'start' to play";
document.querySelector("#clock").innerHTML = "10s";

let inputBox = document.querySelector("input");
const compareWords = (value) => {
  wordsArr.forEach((word) => {
    if (word === value || value === "start") {
      getRandomWord();
      resetInputBox();
    }
  });
  initialiseTimer();
};

inputBox.addEventListener("keyup", () => {
  console.log(inputBox.value);
  compareWords(inputBox.value);
});

// Word Array functionality
const getRandomWord = () => {
  const randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  document.getElementById("word").innerHTML = randomWord;
};

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
updateScore();

// resetting input after typing correct word
const resetInputBox = () => {
  document.querySelector("input").value = "";
  document.querySelector("input").placeholder = "";
};
