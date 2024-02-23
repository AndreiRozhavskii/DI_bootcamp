import { TodoList } from "./todo.js";
let todoList = new TodoList([
    { name: "Buy groceries", done: false },
    { name: "Do laundry", done: false },
    { name: "Pay bills", done: true },
    ]);

todoList.addTask({ name: "Read a book", done: false });
todoList.addTask({ name: "Watch a movie", done: false });

todoList.markTaskAsComplete(0);
todoList.markTaskAsComplete(3);

todoList.listAllTasks();