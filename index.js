let secretNumber;
let lastGuess;
const pastGuesses = [];
let guessesRemaining = 10;
let guessCount = 0;

const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const INCORRECT_MESSAGE = "Incorrect. You are merely a normal human.";

const generateNumber = () => {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min) + min);
  // MILESTONE 1: Right now the secret number is always 5. Change this
  // to return a secret number between 1 and 10.
};

const checkIsCorrect = () => {
  if (lastGuess === secretNumber) {
    return true;
  } else {
    return false;
  }
  // MILESTONE 3: Right now every guess will be true. Change
  // the above code so it checks to make sure lastGuess
  // is equal to secretNumber.
};

const evaluateGuess = () => {
  if (lastGuess > secretNumber) {
    return true;
  } else if (lastGuess < secretNumber) {
    return false;
  }
};

function makeGuess() {
  if (!secretNumber) {
    secretNumber = generateNumber();
    console.log(secretNumber); // for testing
  }
  // MILESTONE 2: ADD CODE HERE to pop up a dialog box
  // asking the user for a number.
  let userGuess = prompt("Enter your guess:");
  lastGuess = parseInt(userGuess);
  pastGuesses.push(lastGuess);
  guessesRemaining -= 1;
  guessCount += 1;
  //--------------------------------------------
  updatePage();
}

// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

const updatePage = () => {
  document.getElementById("last-guess").innerHTML = lastGuess;
  const thirdText = document.getElementById("third-text");
  const fourthText = document.getElementById("fourth-text");
  const correct = document.getElementById("correct");
  const isCorrect = checkIsCorrect();
  if (isCorrect) {
    correct.innerHTML = CORRECT_MESSAGE;
    thirdText.remove();
    fourthText.remove();
  } else {
    correct.innerHTML = INCORRECT_MESSAGE;
    displayInfo();
  }
};

const displayInfo = () => {
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  document.getElementById("guess-count").innerHTML = guessCount;
  document.getElementById("recent-guess").innerHTML = lastGuess;
  const evaluation = document.getElementById("evaluation");
  const isHigh = evaluateGuess();
  if (isHigh) {
    evaluation.innerHTML = "high!";
  } else {
    evaluation.innerHTML = "low!";
  }
  document.getElementById("past-guess").innerHTML = pastGuesses.join(", ");
};
