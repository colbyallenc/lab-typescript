// Add the reference to the interface
import {TodoListInterface, TodoItemInterface} from "./interfaces"
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
    title: string   = "";
    status: boolean = false ;
    updatedAt: Date;

    constructor(title: string = "New task" {
        this.title     = title;
        this.updatedAt = new Date();
    }

    toggleStatus() {
        this.status != this.status;
    }

}


// Create class TodoList that implements the corresponding interface
export class TodoList implements TodoListInterface {


}



// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
