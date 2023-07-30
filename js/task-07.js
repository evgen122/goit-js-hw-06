/** @format */

const elements = {
  input: document.querySelector("#font-size-control"),
  font: document.querySelector("#text"),
};

elements.input.addEventListener("input", handlerSearch);

function handlerSearch(event) {
  let fontSize = event.currentTarget.value;

  //   console.log(fontSize);

  elements.font.style.fontSize = `${fontSize}px`;
}
