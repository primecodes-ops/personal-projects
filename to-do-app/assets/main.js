'use strict'

const inputField = document.querySelector('.to-do');
const tasksContainer = document.querySelector('.tasks');

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const value = inputField.value.trim();

    if (value !== '') {
      const newTask = document.createElement('div');
      newTask.classList.add('task-item');

      newTask.innerHTML = `
        <span>${value}</span>
        <i class="fa-solid fa-trash" style="float: right; cursor: pointer; color: #ff3b3b"></i>
        <i class="fa-solid fa-pencil" style="float: right; cursor: pointer; color: #FFD43B"></i>
      `;

      newTask.querySelector('i').addEventListener('click', () => {
        newTask.remove();
      });

      tasksContainer.appendChild(newTask);
      inputField.value = '';
    }
  }
});
