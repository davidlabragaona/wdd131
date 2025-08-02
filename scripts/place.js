const today = new Date();
const year = document.querySelector("#currentyear");
const lastUpdate = document.querySelector("#lastModified");

year.textContent = today.getFullYear();
lastUpdate.textContent = `Last modification: ${document.lastModified}`;


const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const windchill = document.querySelector("#windchill");

if (tempC <= 10 || windSpeedKmH > 4.8)
    windchill.textContent = calculateWindChill(temp, wind);
else
    windchill.textContent = "N/A";

function calculateWindChill(tempC, windSpeedKmH) {
    return Math.round((13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windSpeedKmH, 0.16)) + (0.3965 * tempC * Math.pow(windSpeedKmH, 0.16)) * 10) / 10);
}