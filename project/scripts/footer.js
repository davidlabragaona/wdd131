const today = new Date();
const year = document.querySelector("#currentyear");
const lastUpdate = document.querySelector("#lastModified");
year.textContent = today.getFullYear();
lastUpdate.textContent = `Last modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});