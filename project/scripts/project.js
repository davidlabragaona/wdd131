/*const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});
*/
/* -------  If we created a fishtank  ----------*/
const temp = 78;
const pH = 7.7;
const oxygen = 10;
checkForm();
loadData();

function checkForm() {
	let params = new URLSearchParams(window.location.search);
	if (params.size !== 0)
	{
		let fishData = {};
		for (let [key, value] of params) {
			//console.log(`${key} = ${value}`);
			fishData[key] = value;
		}
		localStorage.setItem('tankdata', JSON.stringify(fishData));
	}
}

/*---- Global ----*/
function getData(data) {
	console.log
	return localStorage.getItem(data) || null;
}

function displayTank(tankdata) {
	if (tankdata === null)
	{
		let main = document.querySelector('main');
		main.innerHTML = '<section class="card"><h3>No tank defined. Please create one</h3></section>';
	}
	else {
		let log = document.querySelector("#tcap");
		if (log === null || log === undefined)
			return;
		log.textContent = `${tankdata.tcap}`;
		log = document.querySelector("#ttemp");
		log.textContent = `${temp}`;
		log = document.querySelector("#tph");
		log.textContent = `${pH}`;
		log = document.querySelector("#tox");
		log.textContent = `${oxygen}%`;
	}
};

function displayFish(fishdata) {
	if (fishdata === null) {
	}
	else {
		let flog = document.querySelector("#fishcount");
		if (flog === null || flog === undefined)
			return;
		let count = Number(fishdata['gold']) + Number(fishdata['clown']) + Number(fishdata['cardinal']);
		flog.textContent = `${count}`;
	}
	
};

function loadData() {
	let tankdata = getData('tankdata');
	let fishdata = getData('fishdata');
	if (tankdata !== null)
		tankdata = JSON.parse(tankdata);
	displayTank(tankdata);
	if (fishdata !== null) {
		fishdata = JSON.parse(fishdata);
		displayFish(fishdata);
	}	
}