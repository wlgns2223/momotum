class WeatherManager {
    constructor() {
        this.COORDS = 'coords';
        this.API_KEY = ""
        this.weatherSpace = document.querySelector('.todo .todo-weather');

        this.init();
    }

    init() {
        this.loadGeo();
    }

    loadGeo() {
        const loadedCoords = localStorage.getItem(this.COORDS);
        
        if(loadedCoords === null ){
            this.askForCoords();
        } else {
            const parsedCoord = JSON.parse(loadedCoords);
            this.renderWeather(parsedCoord);
        }
    }

    askForCoords() {
        navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, this.handleGeoError)
    }

    handleGeoError(err) {
        console.error(err);
    }

    handleGeoSuccess(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude,
        };

        this.saveCoords(coordsObj);
        this.renderWeather(coordsObj);
    }

    saveCoords(coordsObj) {
        localStorage.setItem(this.COORDS, JSON.stringify(coordsObj));
    }

    renderWeather(coordsObj) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}&appid=${this.API_KEY}&units=metric`)
            .then(res => res.json())
            .then(res => {
                const city  = res.name;
                const temperature = res.main.temp;
                this.weatherSpace.textContent = `${temperature} C @ ${city}`;
            });
    }
}