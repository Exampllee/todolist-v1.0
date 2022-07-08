const todosNode = document.querySelector('.js-todos');
const addButtonNode = document.getElementById('addTodo');
const inputNode = document.querySelector('.js-addTodo');

let todoList = [];

function addTodo(text) {
    const todo = {
        text,
        status: false,
        id: Math.random()
    }
    todoList.push(todo);
}

function removeTodo(id) {
    todoList.forEach(todo => {
        if (todo.id === id)
        todo.status = true;
    })
}

function render() {
    let html = '';

    todoList.forEach(todo => {
        if ( todo.status) {
        return};
        html += `<div>
        ${todo.text}
        </div>`;
    })
    
    todosNode.innerHTML = html;
    console.log(todoList);
}

addButtonNode.addEventListener('click', () => {
    const text = inputNode.value;

    addTodo(text);

    render();
});



render();