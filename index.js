//Creating class Element
class Worlds {
  constructor(title, symbol, descr) {
    this.title = title;
    this.symbol = symbol;
    this.descr = descr;
    this.linkedWorlds = {};
  }
  //Description of World of the element
  describe() {
    return "Looking around the " + this.title + " you can see " + this.descr;
  }
  linkWorld(direction, worldToLink) {
    this.linkedWorlds[direction] = worldToLink;
  }
}

//Create Worlds of elements
const Earth = new Element(
  "Earth",
  "Symbol of stability, nourishment, security, fertility, health, and home.",
  "Earth is associated with the season of winter, midnight, and the cardinal direction North. Earth is depicted through green, brown and yellow."
);
const Fire = new Element(
  "Fire",
  "Symbol of love, desire, anger, power, assertiveness, and energy.",
  "Fire is associated with the season of summer, hot afternoons, and the cardinal direction south, and is typically depicted through the colors orange, red, and yellow. "
);
const Water = new Element(
  "Water",
  "Symbol of rebirth, healing, fertility, change, dreaming, clarity, intuition.",
  "Water is associated with the season of autumn, sunset, and the cardinal direction west, and the colors used to depict water are blue, grey, silver and black."
);
const Air = new Element(
  "Air",
  "Symbol of knowledge, perception, communication, creativity, and strategy.",
  "Air is associated with the season of spring, sunrise, and the cardinal direction east and is depicted through yellow, blue, white, and grey."
);
//Link worlds
Earth.linkedWorlds("spring", Air);
Earth.linkedWorlds("autumn", Water);
Air.linkedWorlds("summer", Fire);
Air.linkedWorlds("winter", Earth);
Fire.linkedWorlds("autumn", Water);
Fire.linkedWorlds("spring", Air);
Water.linkedWorlds("winter", Earth);
Water.linkedWorlds("summer", Fire);

//multiplication task
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
