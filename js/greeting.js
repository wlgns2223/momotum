class NameManager {

    static get CURRENT_USER() {
        return "currentUser";
    }

    constructor() {
        this.nameForm = document.querySelectorAll('.todo-form')[0];
        this.name = localStorage.getItem(NameManager.CURRENT_USER);
   
    }

    getName() {
        return this.name;
    }

    saveName(name) {
        localStorage.setItem(NameManager.CURRENT_USER, name);
        this.name = name;
    }
}

class NameApp {

    static get TODO_FORM_INVISIBLE() {
        return "todo-form__invisible";
    }

    constructor() {
        this.nameManager = new NameManager();
        this.nameForm = document.querySelector('.todo-name-form');
        this.renderName(this.nameManager.getName());
        this.bindEvents();
    }

    renderName(name) {

        if(name !== null) {
            this.nameForm.classList.add(NameApp.TODO_FORM_INVISIBLE);
            const nameArea = document.querySelector('.todo-greeting .todo-name');
            nameArea.textContent = `${nameArea.textContent}. ${name} !`;
        } 
    }

    bindEvents(){
        this.nameForm.addEventListener('submit',(event) => {
            event.preventDefault();
            const input = this.nameForm.querySelector('.input-basic');
            const name = input.value;
            this.nameManager.saveName(name);
            this.renderName(name);
        });
    }
}