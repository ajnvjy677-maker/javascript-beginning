const tasks = ["workout", "movie", "software development"]

const displayTasks = () => {
    const tasksContainer = document.getElementById("new");
    const messageEl = document.getElementById("error");
    console.log(tasks)
    if (tasks.length === 0) {
        messageEl.innerText = "enter a task"
    } else {
        messageEl.innerText = ""
    }
    

    tasksContainer.innerHTML = "";

    for (let i=0;i<tasks.length;i++) {
        tasksContainer.innerHTML += `
            <div class="alert alert-light d-flex justify-content-between mb-2 align-items-center"
                 role="alert">
                <span>${tasks[i]}</span>
                <button class="btn btn-danger btn-sm" onclick=(deletetask(${i}))>Delete</button>
            </div>
        `;
    }
};
displayTasks()


const addTask = () => {
    const taskInputEl = document.getElementById("muse");
    const inputValue = taskInputEl.value.trim()
    if (inputValue.length === 0){
        alert("task should not be blank")
        return
    }
    tasks.push(inputValue);
    console.log(tasks);
    taskInputEl.value= ""
    displayTasks()
}

function deletetask(i) {
    console.log(i)
    tasks.splice(i, 1)
    displayTasks()
}


