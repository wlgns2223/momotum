class NameManager {

    constructor() {
        this.nameForm = document.querySelectorAll('.todo-form')[0];
        this.CURRENT_USER = "currentUser";
        this.TODO_FORM_INVISIBLE = "todo-form__invisible";

        this.init();
    }

    init() {
        this.loadName();
    }

    loadName() {
        const currentUser = localStorage.getItem(this.CURRENT_USER);

        if(currentUser === null ){
            this.askForName();
        } else {
            this.renderName(currentUser);
        }
    }

    askForName() {
        this.nameForm.classList.remove(this.TODO_FORM_INVISIBLE);
        this.nameForm.addEventListener('submit',(event) => {

            event.preventDefault();
            const input = this.nameForm.querySelector('.input-basic');
            const name = input.value;
            this.renderName(name);
            this.saveName(name);

        });
    }

    renderName(name) {
        const nameArea = document.querySelector('.todo-greeting .todo-name');
        nameArea.textContent = `${nameArea.textContent}. ${name} !`;
        this.nameForm.classList.add(this.TODO_FORM_INVISIBLE);
    }

    saveName(name) {
        localStorage.setItem(this.CURRENT_USER,name);
    }
}