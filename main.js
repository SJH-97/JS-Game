const displayWord = document.getElementsByClassName("countdown-box__word");
const displayTimer = document.getElementsByClassName("countdown-box__clock");
const inputScreen = document.getElementsByClassName("input-box__text");

//startGame Function, Holds the countDown function, randomWord function and resetGame function.
const startGame = () => {
  displayWord.innerHTML(randomWord());
  countDownFunction();
};

let score = 0;
let highScore = 0;
// let inputScreen = "type 'start' to play";
// // let randomWord = "";
let timer = 10 + "s";

const randomWord = () => {
  wordArray[Math.floor(Math.random() * wordArray.length)];
};

const countDown = () => {
  let countDownFunction = setInterval(function () {
    if (timer <= 0) {
      clearInterval(countDownFunction);
      displayTimer.innerHTML = "Game Over!";
    } else {
      displayTimer.innerHTML = timer + "s";
    }
  });
};

// const initialiseGame = document.addEventListener("mouseover", (event) => {
//   startGame();
// });

const displayScore = () => {
  if (highScore != Number) {
    score = highScore;
  } else if (score > highScore) {
    score = highScore;
  }
};

const wordArray = [
  "cheese",
  "amused",
  "python",
  "bulldog",
  "salmon",
  "mug",
  "nology",
  "leeds",
  "seasons",
  "day",
  "receipt",
  "glass",
  "ruler",
  "pen",
  "book",
  "spray",
  "ring",
  "bullet",
  "regular",
  "ennuit",
  "cable",
  "tie",
  "course",
  "stream",
  "chemistry",
  "accordion",
  "syntax",
  "gun",
  "bike",
  "java",
  "array",
  "port",
  "fillet",
  "twenty",
  "style",
  "ok",
  "peng",
  "revolver",
  "skate",
  "dj",
  "blue",
  "mountain",
  "ski",
  "lift",
  "croissant",
  "figma",
  "noise",
  "pi",
  "amazing",
  "wrought",
  "fiddle",
  "node",
  "ice",
  "detection",
  "apple",
  "compile",
  "queue",
  "ufo",
  "quest",
  "burrito",
  "command",
  "ram",
  "pickle",
  "fork",
  "calculus",
  "wizzard",
  "sleep",
  "demo",
  "outline",
  "sheesh",
  "computer",
  "devil",
  "beautiful",
  "wire",
  "coaster",
  "poster",
  "paint",
  "shirt",
  "shingle",
  "cave",
  "ion",
  "fermentation",
  "relaxation",
  "trouble",
  "driver",
  "scotlan",
  "taurus",
  "criminal",
  "shuffle",
  "degree",
  "pine",
  "chin",
  "madolorian",
  "jersey",
  "contextual",
  "spaghetti",
  "deviation",
  "statistical",
  "lumbar",
  "profile",
  "antagonist",
  "framework",
  "detection",
  "vanilla",
  "opus",
  "prometheus",
  "orange",
  "comma",
  "solute",
  "crust",
  "pate",
  "orangutan",
  "curve",
  "pasting",
  "trombone",
  "cuthulu",
  "caesar",
  "knit",
  "tram",
  "helicopter",
  "resolution",
  "contract",
  "omega",
  "omni-man",
  "snow",
  "skyrim",
  "zulu",
  "xenomorph",
  "yoghurt",
  "llama",
  "impala",
  "guitar",
];
