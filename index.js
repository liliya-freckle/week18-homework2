const taskInput = document.getElementById(`task`)
const inputContainer = document.getElementById('inputContainer')
const listTasks = document.querySelector('#listTasks')
const noTask = document.querySelector('#noTask')
const errorMessage = document.createElement('div')

function start() {
    // данные из локалсторадж переносит в html
}
start()

function createTask() {
    if (taskInput === null) {
        console.error('Не удалось найти элемент с id "task"')
        return
    }
    const valueInput = taskInput.value.trim();
    if (valueInput === "") {
        console.error('Введите задачу')
        errorMessage.textContent = "Введите задачу"
        inputContainer.append(errorMessage);
        return
    }

    errorMessage.textContent = ""
    listTasks.style.display = "block";
    noTask.style.display = "none";

    const task = document.createElement('li');
    task.textContent = valueInput;
    listTasks.append(task)
    taskInput.value = ""

    // создать р и чекбоксы, поместить li
    // слушатель состояния для чекбокса + обновление инфо в локал сторадж
    // 

    const lsTasks = localStorage.getItem("tasks") ?? []


    /*get value, trim(), validation ,
    const ul
    create new element (li)
    value.textContent = li
    get local storage
    put value to local storage
    li.append
    */

}

function changeTasksState() {

}


function clearTask() {

}