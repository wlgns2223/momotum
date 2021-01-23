const body = document.querySelector('body');

const IMG_NUM = 5;

const paintImg = (imgNum) => {
    const img = new Image();
    img.src = `./images/${imgNum}.jpg`;

    img.classList.add('bgImage');

    body.appendChild(img);
}


const getrandom = () => {
    
    return Math.floor(Math.random() * IMG_NUM) + 1;
}

function init() {
    const num = getrandom();
    paintImg(num);
}

init();