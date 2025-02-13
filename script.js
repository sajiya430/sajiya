//Todo App

document.addEventListener("Todos",init);

function init(){
    loadTasks();
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(task => addTaskToDom(task));
 }
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if(task == "") return;

    addTaskToDOM(task);
    saveTask(task);
    taskInput.value="";
}
function addTaskToDOM(task){
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class= "remove-btn">Remove</button>`
    taskList.appendChild(li);

    li.querySelector(".remove-btn").addEventListener("click",function(){
        removeTask(task,li);
    })
}

function saveTask(task){
    const tasks = JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function removeTask(task,element){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(t => t!==task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    element.remove();
}