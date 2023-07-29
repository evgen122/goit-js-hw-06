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

list.prepend(el[0], el[1], el[2], el[3], el[4], el[5]);
console.log(list);
