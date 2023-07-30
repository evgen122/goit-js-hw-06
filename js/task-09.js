/** @format */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector("body"),
  button: document.querySelector("button"),
  span: document.querySelector(".color"),
};

elements.button.addEventListener("click", handlerClickChangeColor);

function handlerClickChangeColor() {
  elements.body.style.backgroundColor = getRandomHexColor();
  elements.span.textContent = elements.body.style.backgroundColor;
}
