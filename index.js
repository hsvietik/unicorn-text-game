let number1 = Math.floor(Math.random() * 7) + 2;
console.log(number1);
let number2 = Math.floor(Math.random() * 7) + 2;
console.log(number2);
let product = number1 * number2;
console.log(product);

document.getElementById("task").innerHTML = number1 + " * " + number2;

function rightAnswer() {
  let userAnswer = Number(document.getElementById("answer").value);
  console.log(userAnswer);
  if (userAnswer === product) {
    document.getElementById("answer").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer").style.backgroundColor = "red";
  }
}
