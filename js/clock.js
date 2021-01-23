const getTime = () => {
    const clockContainer = document.querySelector('.js-clock');
    const clockTitle = clockContainer.querySelector('.js-title');
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = `${hours < 10 ? `0${hours}` : hours}`;
    minutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
    seconds = `${seconds < 10 ? `0${seconds}` : seconds}`;
   

    clockTitle.textContent = `${hours}:${minutes}:${seconds}`
}

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();