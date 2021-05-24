class BackgroundManager {

    static get IMG_NUM() {
        return 5;
    }

    constructor() {
        
        this.init();
    }
    
    init() {
        const numberOfImages = this.getRandomNumber();
        this.renderBackground(numberOfImages);
    }

    renderBackground(imgNum) {
        const body = document.querySelector('body');
        const img = new Image();
        img.src = `./images/${imgNum}.jpg`;
        console.log(img);
        img.classList.add('bgImage');
        body.appendChild(img);
    }

    getRandomNumber() {
        return Math.floor(Math.random() * BackgroundManager.IMG_NUM) + 1;
    }
}