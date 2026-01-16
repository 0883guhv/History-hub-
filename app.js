function checkAnswer(answer) {
  const result = document.getElementById("quizResult");
  if (answer === "correct") {
    result.textContent = "Correct! 🎉";
    result.style.color = "lightgreen";
  } else {
    result.textContent = "Try again!";
    result.style.color = "salmon";
  }
}

function vote(choice) {
  const poll = document.getElementById("pollResult");
  poll.textContent = "You voted: " + choice;
}
