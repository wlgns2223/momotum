
const paintImg = (imgNum) => {
    const body = document.querySelector('body');
    const img = new Image();
    img.src = `./images/${imgNum}.jpg`;

    img.classList.add('bgImage');

    body.appendChild(img);
}


const getrandom = () => {
    
    const IMG_NUM = 5;
    return Math.floor(Math.random() * IMG_NUM) + 1;
}

function init() {
    const num = getrandom();
    paintImg(num);
}

init();