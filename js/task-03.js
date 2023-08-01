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
  const itemGallery = `<li> 
  <img src="${el.url}" alt = "${el.alt}" width = "500" /> 
    </li>`;
  arrGallery.push(itemGallery);
});

console.log("arrGallery", arrGallery);

const arrGalleryJoin = arrGallery.join("");

console.log("arrGallery.join", arrGalleryJoin);

gallery.style.listStyleType = "none";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "20px";
gallery.style.justifyContent = "center";

gallery.insertAdjacentHTML("beforeend", arrGalleryJoin);
