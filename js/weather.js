
const COORDS = 'coords';
const API_KEY = "4f116f50e74b7724e204160b69ce34f4";
const weather = document.querySelector('.js-weather');

const loadGeo = () => {
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoord = JSON.parse(loadedCoords);
        getWeather(parsedCoord.latitude,parsedCoord.longitude);
    }
}

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

const handleGeoError = (position) => {
    console.log(position);
}

const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

const getWeather = (lat,lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
        const temperature = res.main.temp;
        const city = res.name;
        weather.textContent = `${temperature} C @ ${city}`;
    })
}

function init(){
    loadGeo();
}

init();