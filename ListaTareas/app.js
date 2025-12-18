// let input
// Asignar variables
const input = document.getElementById('task-input');
// Asignar un valor fijo
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function. Es una instruccion dentro de un programa que me va a permitir realizar alguna accion

// ES6. Actualizacion de JS del 2015

// function => Funcion flecha
// Metodo. Funcion predefinida dentro de javascript
addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.addEventListener('click', ()=>{
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', ()=>{
        taskList.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    input.value = '';
});



