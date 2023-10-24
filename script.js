function addTask() {
    const dateInput = document.getElementById('date');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    
    if (!dateInput.value || !taskInput.value) {
        alert('Please fill in both date and task.');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = `${dateInput.value}: ${taskInput.value}`;
    taskList.appendChild(listItem);
    dateInput.value = '';
    taskInput.value = '';
}
