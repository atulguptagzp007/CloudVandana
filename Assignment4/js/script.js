function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class="delete-btn" onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // Clear input field
}

function removeTask(button) {
    button.parentElement.remove(); // Remove the task
}
