//step1:
//get all nodes from html
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const numberInput = document.querySelector(".number");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
//step 2
//2.generate a random number and score
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log(randomNumber);
//step 3
//3. check the button functionality
const checkFunc = () => {
  const guessValue = Number(guess.value);
  console.log(guessValue);

  //check user has entered input or not
  if (!guessValue || guessValue < 1 || guessValue > 20) {
    message.textContent = "Please enter a valid number between 1 and 20";
    return;
  }

  //check the inppput if it is too low or too hign then decrese the score

  //if the input is correct high score as what score is remaining display that as high score
  else if (guessValue === randomNumber) {
    message.textContent = "Congratulations! You guessed the number!";
    document.querySelector("body").style.backgroundColor = "#114329";
    highScore.textContent = scores;
    numberInput.textContent = randomNumber;
  } else if (guessValue < randomNumber) {
    message.textContent = "Too low! Try again.";
    scores--;
    score.textContent = scores;
  } else if (guessValue > randomNumber) {
    message.textContent = "Too high! Try again.";
    scores--;
    score.textContent = scores;
  }
};

checkButton.addEventListener("click", checkFunc);
//check again button functionality
againButton.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scores = 20;
  score.textContent = scores;
  message.textContent = "Start guessing...";
  guess.value = "";
  numberInput.textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
});

//when the score is 0 then display the message that you lost the game and disable the check button
