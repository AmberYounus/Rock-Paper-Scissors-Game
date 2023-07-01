const message = document.querySelector(".message");
const score = document.querySelector(".score");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");

const winnerScores = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
  let playerSelection = e.target.innerText;

  let computerSelection = Math.random();

  if (computerSelection < 0.34) {
    computerSelection = "Rock";
  } else if (computerSelection <= 0.68) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  let result = checkWinner(playerSelection, computerSelection);

  if (result === "Player") {
    result += " wins!";
    winnerScores[0]++;
  }

  if (result === "Computer") {
    result += " wins!";
    winnerScores[1]++;
  }

  if (result === "Draw") {
    result += ". It's a tie!";
  }

  score.innerHTML =
    "User : [" + winnerScores[0] + "] Computer: [" + winnerScores[1] + "] ";
  messenger(
    "User: <strong>" +
      playerSelection +
      " </strong> Computer: <strong> " +
      computerSelection +
      " </strong>  " 
      
  );
  results.innerHTML = result;
}

function messenger(selectionMessage) {
  message.innerHTML = selectionMessage;
}

function checkWinner(Player, Computer) {
  if (Player === Computer) {
    return "Draw";
  }
  if (Player === "Rock") {
    if (Computer === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (Player === "Paper") {
    if (Computer === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (Player === "Scissors") {
    if (Computer === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}
