/** @format */

const elements = {
  input: document.querySelector("#validation-input"),
  style: document.querySelector,
};

elements.input.addEventListener("blur", handlerSearch);

function handlerSearch(event) {
  let dataLengs = event.currentTarget.value;

  if (dataLengs.length == elements.input.dataset.length) {
    elements.input.classList.remove("invalid");
    elements.input.classList.add("valid");
  } else {
    elements.input.classList.remove("valid");
    elements.input.classList.add("invalid");
  }
}
