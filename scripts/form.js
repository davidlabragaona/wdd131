const today = new Date();
const year = document.querySelector("#currentyear");
const lastUpdate = document.querySelector("#lastModified");

const productBox = document.querySelector("#pname");
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(x => {
  const p = document.createElement('option');
  p.value = x.id;
  p.textContent = x.name;
  productBox.appendChild(p);
});

year.textContent = today.getFullYear();
lastUpdate.textContent = `Last modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});