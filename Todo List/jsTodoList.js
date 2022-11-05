const newTodo = document.querySelector('#new');
const form = document.querySelector('#todoForm');
const ulTodo = document.querySelector('#ul');
const removeTodo = document.querySelector('#remove')
const savedTodos = JSON.parse(localStorage.getItem('todoListItems')) || [];

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (newTodo.value !== '') {
        const newLi = document.createElement('li');
        newLi.innerText = newTodo.value;
        ulTodo.append(newLi);
        const newLiObj = { 'todo': newTodo.value, 'completed': false };
        savedTodos.push(newLiObj);
        localStorage.setItem('todoListItems', JSON.stringify(savedTodos))
        newTodo.value = '';
    }
})

removeTodo.addEventListener('click', function () {
    const lis = document.querySelectorAll('.line');
    for (let i = 0; i < lis.length; i++) {
        for (let j = 0; j < savedTodos.length; j++) {
            if (lis[i].innerText === savedTodos[j].todo) {
                savedTodos.splice([j], 1);
            }
        }
        lis[i].remove();
    };
    localStorage.setItem('todoListItems', JSON.stringify(savedTodos));
})

ulTodo.addEventListener('click', function (evt) {
    console.log(evt.target.classList);
    let clicked = evt.target
    if (clicked.tagName === 'LI') {
        clicked.classList.toggle('line');
        for (let i = 0; i < savedTodos.length; i++) {
            if (savedTodos[i].todo === evt.target.innerText) {
                savedTodos[i].completed = !savedTodos[i].completed;
            }
        }
        localStorage.setItem('todoListItems', JSON.stringify(savedTodos));
    }
})

if (savedTodos !== null) {
    for (let i = 0; i < savedTodos.length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = savedTodos[i].todo;
        if (savedTodos[i].completed === true) {
            console.log('line 98');
            newLi.classList.add('line');
        } else if (savedTodos[i].completed === false) {
            console.log('we are line 101');
            newLi.classList.remove('line')
        };
        console.log(newLi)
        ulTodo.append(newLi);
    }
}