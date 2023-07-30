/** @format */

const elements = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

elements.input.addEventListener("input", handlerSearch);
let textInput = "";
function handlerSearch(event) {
  textInput = event.currentTarget.value;
  console.log(textInput);
  if (textInput == 0) {
    elements.output.textContent = "Anonymous";
  } else {
    elements.output.textContent = textInput;
  }
}
