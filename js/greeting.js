const form =document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');
const CURRENT_USER_IN_LS = "currentUser";
const SHOWING_ON = "showing";


const loadName = () => {
    const currentUser = localStorage.getItem(CURRENT_USER_IN_LS);
    if(currentUser === null ){
        askForName();

    } else {
        paintGreeting(currentUser);

    }
}

const askForName = () => {

    form.classList.add(SHOWING_ON);
    form.addEventListener('submit',handleSubmit);
}

const handleSubmit = (event) => {
    
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

const paintGreeting = (text) => {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.textContent = `Hello ${text}`;
}

const saveName = (item) =>{
    localStorage.setItem(CURRENT_USER_IN_LS,item);
}



function init(){
    loadName();

}

init();