/** @format */

const elements = {
  form: document.querySelector("form"),
};

elements.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  console.dir(evt.currentTarget);

  const {email, password} = evt.currentTarget.elements;

  console.log(email);
  console.log(email.v);
  console.log(password);
}
