document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskAppear = document.getElementById("tasks");  
  newTaskForm.addEventListener("submit", createNewTask);
});

function createNewTask(event) {
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.preventDefault();  
};


function appendNewTask(task) {
  document.getElementById("tasks").appendChild(task);
};