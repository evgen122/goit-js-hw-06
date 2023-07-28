/** @format */

const listWithId = document.querySelector("#categories");

const listWithClass = listWithId.querySelectorAll(".item");
console.log(`Number of categories: ${listWithClass.length}`);

listWithClass.forEach(function (item) {
  let nameCategory = item.querySelector("h2").textContent;
  console.log(`Category: ${nameCategory}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
