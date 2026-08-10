let input = document.getElementById("input");
let button = document.getElementById("search-button");
let ipDisplay = document.getElementById("ip-display");
let locationDisplay = document.getElementById("location");
let timezoneDisplay = document.getElementById("timezone");
let ispDisplay = document.getElementById("isp");

button.addEventListener("click", async (event) =>  {
    ipInput = input.value;
    ipDisplay.textContent = ipInput;    
    data = await getData(ipInput);
    locationDisplay.textContent = data.location.region + " " + data.location.city;
    timezoneDisplay.textContent = data.location.timezone;
    ispDisplay.textContent = data.isp; 
    placeMap([data.location.lat, data.location.lng]);
})


async function getData(ip){
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_xGM2C5ANjIt4tS1Y98akPY2GLA2IQ&ipAddress=${ip}`);
    const data = await response.json();
    return data;
}

function placeMap(coordinates){
    var map = L.map('map').setView(coordinates, 13);
    var marker = L.marker(coordinates).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}