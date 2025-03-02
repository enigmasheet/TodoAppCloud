// Function to add tasks
function addTask() {
    let input = document.getElementById("taskInput").value;

    if (input) {
        // Create list item for task
        let li = document.createElement("li");

        // Create text node for task
        let taskText = document.createTextNode(input);
        li.appendChild(taskText);

        // Create a button to mark task as completed
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            toggleComplete(li);
        };

        // Create a button to delete the task
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(li);
        };

        // Append buttons to list item
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        // Append task to the list
        document.getElementById("taskList").appendChild(li);

        // Clear input field
        document.getElementById("taskInput").value = "";
    }
}

// Function to mark a task as completed
function toggleComplete(task) {
    task.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(task) {
    task.remove();
}
