/** @format */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  inputNumber: document.querySelector("input"),
  divBoxes: document.querySelector("#boxes"),
  // span: document.querySelector(".color"),
};

// console.dir(elements.buttonCreate);
// console.log(elements.buttonDestroy);
// console.log(elements.inputNumber);

elements.buttonCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = elements.inputNumber.value;
  // console.log(amount);
  for (let i = 1; i <= amount; i += 1) {
    document.createElement("div");
  }
}
