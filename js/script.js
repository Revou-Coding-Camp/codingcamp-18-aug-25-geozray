console.log("Hello, World!");

let listtodo = [];

/// validate form input
function validateform() {
    /// DOM Form Elements
    const taskInput = document.getElementById("task-input").value;
    const dueDateInput = document.getElementById("due-date-input").value;

    if (taskInput === '' || dueDateInput === '') {
        alert("Please enter a task or date.");
    } else {
        addtodo(taskInput, dueDateInput);
    }
}

/// Add Todo
function addtodo(task, dueDate,) {
        listtodo.push({
            task: task,
            dueDate: dueDate,
            action: 'ongoing'
        });

        console.log("Task added", task);

        rendertodolist();
}

/// render todo list
function rendertodolist() {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = '';

    for (let i = 0; i < listtodo.length; i++) {
        tasklist.innerHTML += `<li class="border-b py-2">${listtodo[i].task} - ${listtodo[i].dueDate} - ${listtodo[i].action}</li>`;
    }
}
/// function to filter tasks
function filtertask(taskInput) {
    listtodo = listtodo.map(task => {
        if (task.task === taskInput || task.action === 'ongoing'){ 
            console.log("ongoing &", taskInput);
            return {...task, action: 'Completed'};
        }
        return task;
    });
    rendertodolist();
}

/// function to delete all tasks
function deleteall() {
    listtodo = [];
    rendertodolist();
}
