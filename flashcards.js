const DeWordElement = document.querySelector(".de-vokabel");
const RuWordElement = document.querySelector(".ru-vokabel");
let groups = [];
let currentGroup = "";
let currentDeWord = "";
let currentRuWord = "";
let previousRandomNumber = -1;

fetch("./words/vokabeln.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    groups = text.split(";");
  });

function next() {
  currentGroup = getRandomGroup();
  currentDeWord = currentGroup.split(",")[0];
  currentRuWord = currentGroup.split(",")[1];
  DeWordElement.innerHTML = currentDeWord;
  RuWordElement.innerHTML = currentRuWord;
  console.log(currentGroup);
}

function turn() {
  if (DeWordElement.style.transform === "") {
    DeWordElement.style.transform = "rotateY(180deg)";
    RuWordElement.style.transform = "rotateY(0deg)";
  }
  else {
    DeWordElement.style.transform = "";
    RuWordElement.style.transform = "";
  }
}

function getRandomNumber(maxNumber) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * maxNumber);
  } while (randomNumber === previousRandomNumber);
  previousRandomNumber = randomNumber;
  return randomNumber;
}

function getRandomGroup() {
  return groups[getRandomNumber(groups.length)];
}