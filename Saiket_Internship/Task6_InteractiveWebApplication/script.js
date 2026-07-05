const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <div class="task-buttons">
            <button onclick="completeTask(this)">
                Complete
            </button>

            <button onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(li);

    totalTasks++;
    updateCount();

    taskInput.value = "";
}

function completeTask(button){

    const task =
        button.parentElement.parentElement;

    task.classList.toggle("completed");
}

function deleteTask(button){

    const task =
        button.parentElement.parentElement;

    task.remove();

    totalTasks--;
    updateCount();
}

function updateCount(){
    taskCount.textContent = totalTasks;
}