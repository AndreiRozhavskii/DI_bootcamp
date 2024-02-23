
export class TodoList {
   
    constructor(tasks) {
   
    this._tasks = tasks;
    }
    get tasks() {
    return this._tasks;
    }
    
    set tasks(newTasks) {
    this._tasks = newTasks;
    }
    addTask(task) {
    this._tasks.push(task);
    }
    markTaskAsComplete(index) {
   
    if (index >= 0 && index < this._tasks.length) {
    this._tasks[index].done = true;
    }
    }
    listAllTasks() {
   
    for (let i = 0; i < this._tasks.length; i++) {
   
    let task = this._tasks[i];
    let status = task.done ? "Completed" : "Pending";
   
    console.log(`${i + 1}. ${task.name} - ${status}`);
    }
    }
    }