class BackgroundManager {

    static get IMG_NUM() {
        return 5;
    }
    
    constructor() { }

    getRandomNumber() {
        return Math.floor(Math.random() * BackgroundManager.IMG_NUM) + 1;
    }
}

class BackgroundApp {
    constructor() {
        this.backgroundManager = new BackgroundManager();
        this.renderBackground();
    }

    renderBackground(){
        const randomImageNumber = this.backgroundManager.getRandomNumber();
        const body = document.querySelector('body');
        const img = new Image();
        img.src = `./images/${randomImageNumber}.jpg`;
        img.classList.add('bgImage');
        body.appendChild(img);
    }
}