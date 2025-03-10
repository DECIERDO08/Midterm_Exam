let tasks = []; //store tasks

// Create Task funtion
function createTasks(id,name,description){
    tasks.push(id,name,description);
}

// View All task funtion
function viewTasks(){
    return tasks;
}

// Update Task funtion
function updateTasks(id,newName,newDescription){
    const task = tasks.find( task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

// Delete Task Funtion
function deleteTasks(id){
    tasks = tasks.filter(task => task.id !== id);
}

console.log(createTasks());
console.log(viewTasks());
console.log(updateTasks());
console.log(deleteTasks());