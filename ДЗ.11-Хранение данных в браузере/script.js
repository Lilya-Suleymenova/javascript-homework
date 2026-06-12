// Задание 1
// Счетчик посещений

let visits = localStorage.getItem('visits');

if (visits === null) {
    visits = 0;
}

visits = Number(visits);

visits++;

localStorage.setItem('visits', visits);

console.log(`Вы заходили сюда уже ${visits} раз`);


// Задание 2
// Список задач

function addTask(text) {

    let tasks = localStorage.getItem('tasks');

    if (tasks === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }

    tasks.push(text);

    localStorage.setItem(
        'tasks',
        JSON.stringify(tasks)
    );
}


function showTasks() {

    let tasks = localStorage.getItem('tasks');

    if (tasks === null) {
        console.log('Список задач пуст');
        return;
    }

    tasks = JSON.parse(tasks);

    for (let task of tasks) {
        console.log(task);
    }
}


addTask('Изучить localStorage');
addTask('Сделать домашнее задание');
addTask('Отправить работу преподавателю');

showTasks();
