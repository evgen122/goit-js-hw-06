/** @format */

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const arrGallery = [];

images.map((el) => {
  let itemGallery = `<li> 
    <img src="${el.url}" alt = "${el.alt}" width = 500px /> 
    </li>`;
  arrGallery.push(itemGallery);
});
// .join("");

console.log("arrGallery", arrGallery);
arrGallery.join("");

gallery.style.listStyleType = "none";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "20px";
gallery.style.justifyContent = "center";

gallery.insertAdjacentHTML("beforeend", arrGallery);

console.log("gallery", gallery);
