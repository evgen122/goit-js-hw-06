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
};

elements.buttonCreate.addEventListener("click", createBoxes);
elements.buttonDestroy.addEventListener("click", destroyBoxes);

const arrElements = [];

function createBoxes(amount) {
  let itemElements;
  amount = elements.inputNumber.value;
  for (let i = 1; i <= amount; i += 1) {
    itemElements = document.createElement("div");
    itemElements.style.width = `${20 + 10 * i}px`;
    itemElements.style.height = `${20 + 10 * i}px`;
    itemElements.style.backgroundColor = getRandomHexColor();
    arrElements.push(itemElements);
  }
  arrElements.join(" ");
  elements.divBoxes.append(...arrElements);
}

function destroyBoxes() {
  elements.divBoxes.innerHTML = "";
}
