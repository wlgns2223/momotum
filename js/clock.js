class ClockManager {

    constructor() {
        this.init();
    }

    init() {

        this.renderTime();
        setInterval(this.renderTime,1000);

    }

    renderTime() {
        const clockContainer = document.querySelector('.js-clock');
        const clockTitle = document.querySelector('.js-title');
        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = `${hours < 10 ? `0${hours}` : hours}`;
        minutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
        seconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

        clockTitle.textContent = `${hours}:${minutes}:${seconds}`;
    }
}