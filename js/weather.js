class WeatherManager {

    static get COORDS() {
        return "coords";
    }

    static get API_KEY() {
        return "4f116f50e74b7724e204160b69ce34f4";
    }


    constructor() {
        this.weather = {};
        this.coords = {};
        this.initApp();
        
        
    }

    initApp(){
        const coordsTemp = localStorage.getItem(WeatherManager.COORDS);
        if(coordsTemp === null){
            this.setCoords();
        }
        this.coords = JSON.parse(coordsTemp);


    }

    fetchWeather(){

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.coords.latitude}&lon=${this.coords.longitude}&appid=${WeatherManager.API_KEY}&units=metric`;

        return fetch(url).then(res => res.json());
                
    }

    async getWeather(){

        if(this.weather.constructor === Object && Object.keys(this.weather).length === 0){
            const val = await this.fetchWeather();
            this.weather = {
                city: val.name,
                temp: val.main.temp,
            };
        }

        return this.weather
    }

    setCoords(){
        navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, this.handleGeoError)

    }

    handleGeoError(err) {
        console.error(err);
    }

    handleGeoSuccess(position) {
        this.coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        };
        localStorage.setItem(WeatherManager.COORDS, JSON.stringify(this.coords));
    }
}

class WeatherApp {

    constructor() {
        this.weatherManager = new WeatherManager();
        this.renderWeather();
    }

    async renderWeather(){
        const weatherSpan = document.querySelector('.todo .todo-weather');
        const weather = await this.weatherManager.getWeather();
        console.log(weather);
        weatherSpan.textContent = `${weather.temp} @ ${weather.city}`;
    }
}