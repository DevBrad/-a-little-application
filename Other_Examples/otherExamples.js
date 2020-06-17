const score = 75;
let message = "";

function congratulate() {
  message += "Congratulations! ";
}

if (score >= 50) {
  congratulate();
  message += "Proceed to the next round! ";
}

const result = document.getElementById("answer");
result.innerHTML = message;
