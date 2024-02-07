let submit=document.getElementById('submit');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
});


function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
