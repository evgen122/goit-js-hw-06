/** @format */

const elements = {
  span: document.querySelector("#value"),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};

// let counterValue = elements.span.textContent;
elements.decrement.addEventListener("click", handlerClickDecrement);
elements.increment.addEventListener("click", handlerClickIncrement);

let counterValue = 0;

function handlerClickDecrement() {
  counterValue -= 1;
  elements.span.textContent = `${counterValue}`;
}

function handlerClickIncrement() {
  counterValue += 1;
  elements.span.textContent = `${counterValue}`;
}
