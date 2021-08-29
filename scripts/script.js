'use strict'

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
//const addButton = document.getElementById('add');
const todoList = document.querySelector('.todo-list');
const completedList = document.querySelector('.todo-completed');

let todoData = [];
if (localStorage.getItem('todoData') !== null) {
  todoData = JSON.parse(localStorage.getItem('todoData'));
}

const render = function() {
  
  localStorage.setItem('todoData', JSON.stringify(todoData));
  todoList.textContent = '';
  completedList.textContent = '';
  todoData.forEach(function(item, index){
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
          '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
          '</div>';
    if(item.completed) completedList.append(li);
    else {
      todoList.append(li);
    }
    const btnComplete = li.querySelector('.todo-complete');
    btnComplete.addEventListener('click', function(){
      item.completed = !item.completed;
      render();
    });
    const btnRemove = li.querySelector('.todo-remove');
    btnRemove.addEventListener('click', function(){
      todoData.splice(index, 1);
      render();
    });
  });
};

todoControl.addEventListener('submit', function(event){
  event.preventDefault();
  if (headerInput.value !== '') {
    const newTodo = {
    value: headerInput.value,
    completed: false,
    };
    todoData.push(newTodo);
    headerInput.value = '';
    render();
  }
});

render();