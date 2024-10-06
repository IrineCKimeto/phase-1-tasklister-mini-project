document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop the form from refreshing the page
  
      const taskInput = document.getElementById("new-task-description");
      const task = taskInput.value;
  
      const taskList = document.getElementById("tasks");
      const listItem = document.createElement("li");
      listItem.textContent = task;
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    });
  });
  