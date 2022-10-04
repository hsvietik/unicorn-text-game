//Creating class Element
class World {
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
const Whole = new World(
  "Whole World",
  "Symbol of integrity and freedom",
  "Whole World is associated with the whole year seasons, with all directions, with all colors.");
const Earth = new World(
  "Earth",
  "Symbol of stability, nourishment, security, fertility, health, and home.",
  "Earth is associated with the season of winter, midnight, and the cardinal direction North. Earth is depicted through green, brown and yellow."
);
const Fire = new World(
  "Fire",
  "Symbol of love, desire, anger, power, assertiveness, and energy.",
  "Fire is associated with the season of summer, hot afternoons, and the cardinal direction south, and is typically depicted through the colors orange, red, and yellow. "
);
const Water = new World(
  "Water",
  "Symbol of rebirth, healing, fertility, change, dreaming, clarity, intuition.",
  "Water is associated with the season of autumn, sunset, and the cardinal direction west, and the colors used to depict water are blue, grey, silver and black."
);
const Air = new World(
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
Whole.linkedWorlds("autumn", Water);
Whole.linkedWorlds("spring", Air);
Whole.linkedWorlds("winter", Earth);
Whole.linkedWorlds("summer", Fire);

//Create Unicorns that live in Worlds
class Unicorn {
  constructor(name, character, appearance) {
    this.name = name;
    this.character = character;
    this.appearance = appearance;
    this.linkedUnicorn = {};
  }
  //Description of World of the element
  describe() {
    return "You meet " + this.name + " you can see " + this.appearance + ". His character: " + this.character;
  }
  linkWorld(relation, unicornToLink) {
    this.linkedUnicorn[relation] = unicornToLink;
  }
}
const WaterU = new Unicorn(
  "Water Unicorn",
  "The Water Unicorn is the master of the element Water. It can breathe underwater, control floods and make massive waves crash against the coast. Furthermore, it’s the guardian of the Birth Grotto of the Unicorns. Whenever a foal is born, the Water Unicorn watches over it and helps if problems occur. Like all Elemental Unicorns, the Water Unicorn is one of the forebears of the Unicorns, descending from the primal Unicorns. The Water Unicorn loves splashing in the water. Just like a dolphin, it jumps out of the water and does somersaults.",
  "It is part Unicorn, part fish. She has green scales and fins.");
const IceU = new Unicorn(
  "Ice Unicorn",
  "The Ice Unicorn is a kind and brave Unicorn, who helps the Elves and the other Unicorns. He used his horn to make a powerful blast to save Ono who was cryogenicly frozen in ice.",
  "The Ice Unicorn has light blue icy coat. His mane and tail are made of shiny icy crystals in the shape of snowflake, with a gorgeous icy gloss and ombres into darker blues. He also has a shiny, blue, magical horn.");
const FireU = new Unicorn(
  "Fire Unicorn",
  "The Fire Unicorn is the master of the element Fire. It can shoot a flaming ring from his horn. It can create fire and control it. Like all Element Unicorns, the Fire Unicorn is one of the forebears of the Unicorns, descending from the primal Unicorns. The Fire Unicorn loves to gallop through the hot desert. It keeps an eye on the fires of Centopia and steps in when a fire causes too much damage. The Unicorn foals have to complete their first difficult test with the Fire Unicorn.",
  "Her mane and tail are made of fire. She has a flame pattern on her red coat."
);
const RainbowU = new Unicorn(
  "Rainbow Unicorn",
  "She loves to live on the Rainbow Island amid all the beautiful colors. But after she was on the mainland of Centopia for the first time, she finds it great to play with Onchao and the other foals. With her horn, she can create small bubbles in a pond on the rainbow island. These then rise and glimmer in rainbow colors before they burst.",
  "Her mane looks like a rainbow and flutters in the wind as she dribbles. Her tail is also colorful with the colours of the rainbow spreading as she walks. Her skin is bright-pink with circle shapes."
);
const EarthU = new Unicorn(
  "Earth Unicorn",
  "The Earth Unicorn is the master of the element Earth. It can cause earthquakes and create deep tunnels inside the ground. Like all Element Unicorns, the Earth Unicorn is one of the forebears of the Unicorns, descending from the primal Unicorns. It takes care of the animals that live underground and revive the Earth. Since these subterranean creatures are rarely even noticed by Centopia’s other inhabitants, they deserve particular protection. She can crush entire mountains with one stomp of her hoof.",
  "Her mane and horn are made of wooden branches, and has twigs and leaves throughout."
);
const CrystalU = new Unicorn(
  "Crystal Unicorn",
  "She can grow beautiful, huge crystals that are very close to her heart. She loves to grow crystals in the most beautiful colours and shapes. She likes to mirror herself in the smooth surfaces of the crystals and enjoy the sparkle in the twilight of her cave.",
  "She loves to grow crystals in the most beautiful colours and shapes. She likes to mirror herself in the smooth surfaces of the crystals and enjoy the sparkle in the twilight of her cave."
);
const WindU = new Unicorn(
  "Wind Unicorn",
  "The Wind Unicorn can fly on a cloud and create strong storms. It’s the master of the element Air and like all other Element Unicorns, it is one of the forebears of the Unicorns, descending from the primal Unicorns. The Wind Unicorn Can glide downward from heady heights and then veer back upward just short of the ground. It also likes to simply drift along with the wind, wherever it may happen to lead to. The Wind Unicorn can also shoot air out of its mouth and can control it.",
  "The Wind Unicorn is as light as a feather and has a cloud-like mane and tail."
);
const FogU = new Unicorn(
  "Fog Unicorn",
  "Early in the morning, he gallops across the grass-covered meadows of Centopia and creates a magical morning mist everywhere. Since it is itself made of mist, the Fog Unicorn can be forced by every small crack. In addition, it can create strong fog and also light it up again.",
  "The Fog Unicorn consists entirely of white haze. His mane blows in the wind like fine clouds. Whoever touches the fog-unicorn reaches through his body and then has cool dew drops on his hand."
);
EarthU.linkedUnicorn("friend", CrystalU);
CrystalU.linkedUnicorn("friend", EarthU);
WaterU.linkedUnicorn("friend", IceU);
IceU.linkedUnicorn("friend", WaterU);
FireU.linkedUnicorn("friend", RainbowU);
RainbowU.linkedUnicorn("friend", FireU);
WindU.linkedUnicorn("friend", FogU);
FogU.linkedUnicorn("friend", WindU);

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

let backpack;
addToBackPack(item) {
   backpack.push(item);
  }