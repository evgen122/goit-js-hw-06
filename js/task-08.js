/** @format */

const elements = {
  form: document.querySelector("form"),
};

elements.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  //   console.dir(evt.currentTarget);

  const {email, password, submit} = evt.currentTarget.elements;

  //   console.log(email);
  //   console.log(password);

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  } else {
    const info = {email: email.value, password: password.value};
    console.log(info);
    evt.currentTarget.reset();
  }
}
