document.addEventListener('DOMContentLoaded', function() {
    var addTaskBtn = document.getElementById('button');
    var todoInput = document.getElementById('todoInput');
    var taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function() {
      var taskText = todoInput.value.trim();
      todoInput.value = '';
  
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      var li = document.createElement('li');
      li.textContent = taskText;
    
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button';
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  });