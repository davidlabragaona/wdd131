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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Buenos Aires, Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl: "images/baire.webp"
  },
  {
	templeName: "Córdoba, Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl: "images/cordo.webp"
  },
  {
	templeName: "Mendoza, Argentina",
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 24",
    area: 21999,
    imageUrl: "images/mendo.webp"
  }
];

createTempleCard(temples);

const navMenu = document.querySelector('#navMenu');
navMenu.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') {
		let t;
		switch (e.target.id) {
			case 'old':
				t = temples.filter(x => x.dedicated.split(",")[0]<1900);
				break;
			case 'new':
				t = temples.filter(x => x.dedicated.split(",")[0]>2000);
				break;
			case 'large':
				t = temples.filter(x => x.area > 90000);
				break;
			case 'small':
				t = temples.filter(x => x.area < 10000);
				break;
			default:
				t = temples;
				break;
		}
		createTempleCard(t);
	}
});

function createTempleCard(filteredTemples) {
	const resgrid = document.querySelector(".res-grid");
	resgrid.innerHTML = '';
	filteredTemples.forEach(temple => {
		let card = document.createElement('section');
		let name = document.createElement('h3');
		let location = document.createElement('p');
		let dedication = document.createElement('p');
		let area = document.createElement('p');
		let img = document.createElement('img');

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		resgrid.appendChild(card);
	});
}