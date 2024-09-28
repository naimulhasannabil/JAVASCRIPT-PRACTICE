// Guess The Number
function guessTheNumber(difficulty) {
  let maxAttempts;
  let Attempts = 0;
  let randomNumber;
  let range;

  // calculate the number that the users given to us
  switch (difficulty) {
    case "easy":
      range = 10;
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1; // Random Number for 1 - 10
    //   console.log(randomNumber);
      break;

    case "medium":
      range = 100;
      maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 100) + 1; // Random Number for 1 - 100
    //   console.log(randomNumber);
      break;

    case "hard":
      range = 1000;
      maxAttempts = 10;
      randomNumber = Math.floor(Math.random() * 1000) + 1; // Random Number for 1 - 1000
    //   console.log(randomNumber);
      break;

    default:
      alert(
        "Invalid difficulty level!, Choose 'easy', 'medium', or 'hard' & Refresh Again.."
      );
  }
  while (Attempts < maxAttempts) {
    let guess = parseInt(
      prompt(
        `Guess a number between 1 and ${range} (Inclusive.) You have ${
          maxAttempts - Attempts
        } Attempts Left.`
      )
    );
    console.log(guess);
    Attempts++;

    if (guess === randomNumber) {
      alert(
        `Congratulations! You guessed the number in ${Attempts} Attempts. \n If you Want More Refresh and Play the Game.`
      );
      break;
    } else if (guess < randomNumber) {
      alert("Too Low. Try Again!");
    } else {
      alert("Too High. Try Again!");
    }
  }
  if (maxAttempts === Attempts) {
    alert(
      `Sorry, You run out of attempts. The Number was ${randomNumber}. \n If You play more, Refresh Again & Enjoy the Game.`
    );
  }
}

// Get User Input
let difficulty = prompt("Choose difficulty (easy, medium, hard)").toLowerCase();

guessTheNumber(difficulty);
// console.log(difficulty);
