class ToDo {
    constructor(content, done= false){
        this.content = content;
        this.done = done;
    }

    toggle() {
        this.done = ! this.done;
    }
}

class ToDoManager {

    constructor(todos = [] ) {
        this._todos = [];
        this._todos.forEach(todo => {
            this.addTodo(todo.content, todo.done);
        });
    }

    addTodo(content, done = false){
        const newTodo = new ToDo(content,done);
        this._todos.push(newTodo);
        return newTodo;
    }

    getList() {
        return this._todos;
    }

    get leftCount() {
        return this._todos.reduce((prev,cur) => {
            if(cur.done === false) {
                return prev++;
            } else {
                return prev;
            }
        });
    }
}

class TodoApp {
    constructor(todos) {
        this.todoManager = new ToDoManager(todos);
        this.todoList = document.querySelector('.todo .todo-list');
        this.addBtn = document.querySelector('.todo .todo-add .add-button');
        this.bindEvents();
        this.renderTodo();
    }

    renderTodo() {
        this.todoList.innerHTML = '';
        this.todoManager.getList().forEach((todo, i) => {
            const todoElement = this.createTodoElements(todo,i);
            this.todoList.appendChild(todoElement);
        });
    }

    createTodoElements(todo, i) {
        const li = document.createElement('li');
        li.id = "todo-"+i;
        li.className = "todoItem";
        li.innerHTML = 
            `<input type ="checkbox" ${todo.done ? "checked ": ""}>
             <label>${todo.content}</label>`;

        return li;
    }

    bindEvents() {
        this.addBtn.addEventListener('click',event => {
            event.preventDefault();
            let text = document.querySelector(`.todo-add input[type="text"]`);
            this.todoManager.addTodo(text.value);
            text.value='';
            this.renderTodo();
        });

        this.todoList.addEventListener('click',event => {
            if(event.target.nodeName === 'INPUT' 
               && event.target.parentElement.className === 'todoItem'){
                   const clicked = event.target.parentElement;
                   const index = clicked.id.replace('todo-','');
                   this.todoManager.getList()[index].toggle();
                   this.renderTodo();
               }
        });
    }
}