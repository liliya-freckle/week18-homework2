
const taskInput = document.getElementById(`task`)
const inputContainer = document.getElementById('inputContainer')
const listTasks = document.querySelector('#listTasks')
const noTask = document.querySelector('#noTask')
const errorMessage = document.createElement('div')
const valueInput = taskInput.value.trim()

function start() {
    const lsTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

    // данные из локалсторадж переносит в html
}
start()

function createTask() {
    if (taskInput === null) {
        console.error('Не удалось найти элемент с id "task"')
        return
    }

    if (valueInput === "") {
        console.error('Введите задачу')
        errorMessage.textContent = "Введите задачу"
        inputContainer.append(errorMessage);
        return
    }
    errorMessage.textContent = ""
    listTasks.style.display = "block";
    noTask.style.display = "none";


    function renderTask() {
        listTasks.forEach((task) => {
            const newTask = document.createElement('li');
            const newTaskText = document.createElement('div')
            const newTaskCheckbox = document.createElement('input')

            newTaskCheckbox.type = 'checked'
            newTaskCheckbox.checked = task.checked
            newTaskText.textContent = valueInput

            listTasks.append(newTask)
            newTask.append(newTaskText)
            newTask.append(newTaskCheckbox)
            taskInput.value = ""
            console.log(newTaskText)

            newTaskCheckbox.addEventListener('change', function () {
                if (newTaskCheckbox.checked) {
                    newTaskText.style.textDecoration = 'line-through'
                } else {
                    newTaskText.style.textDecoration = 'none'
                }
                task.checked = newTaskCheckbox.checked;
                localStorage.setItem('tasks', JSON.stringify(tasks))
            })
        })
    } renderTask()
}


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

function clearTask() {
    listTasks.remove()
}