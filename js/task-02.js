/** @format */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const el = [];

ingredients.map((item) => {
  const nameIngredient = document.createElement("li");
  nameIngredient.textContent = item;
  nameIngredient.classList.add("item");
  el.push(nameIngredient);
  // console.log(nameIngredient);
});
// console.log(el);

el.join(" ");
list.prepend(...el);

// console.log(list);
