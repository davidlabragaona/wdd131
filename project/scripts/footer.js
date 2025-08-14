const today = new Date();
const year = document.querySelector("#currentyear");
const lastUpdate = document.querySelector("#lastModified");
year.textContent = today.getFullYear();
lastUpdate.textContent = `Last modification: ${document.lastModified}`;