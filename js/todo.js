const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');
const TODOS_LS = 'toDos';
let todos = [];


const deletToDo = (event) => {
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);

    const cleanToDos = todos.filter((item) => item.id !== parseInt(li.id));
    todos = cleanToDos;
    saveToDos();

}

const loadToDo = () =>{
    const loadedTodo = localStorage.getItem(TODOS_LS);
    if(loadedTodo !== null){
        const parsedToDos = JSON.parse(loadedTodo);
        parsedToDos.forEach((todos) => {
            paintToDo(todos.text);
        });
    } 
}

const toDohandleSubmit = (event) =>{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

const paintToDo = (text) =>{
    const li = document.createElement('li');

    const delBtn = document.createElement('button');
    delBtn.textContent = "😀";
    delBtn.addEventListener('click',deletToDo);

    const span = document.createElement('span');
    span.textContent = text;

    const newID = todos.length + 1;

    li.appendChild(delBtn);
    li.appendChild(span)
    li.id = newID;

    toDoList.appendChild(li);
    const todoObj = {
        text : text,
        id: newID
    };
    todos.push(todoObj);
    saveToDos();
}

const saveToDos = () => {
    localStorage.setItem(TODOS_LS,JSON.stringify(todos));
}

function init() {
    loadToDo();
    toDoForm.addEventListener('submit',toDohandleSubmit);
}

init();