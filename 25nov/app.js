// app.js
import { addTask, updateTask, deleteTask, viewTasks } from './taskmanager.js';

// Creating some sample tasks
const task1 = { id: 1, title: 'Finish Project', description: 'Complete the project by deadline', priority: 'High' };
const task2 = { id: 2, title: 'Grocery Shopping', description: 'Buy vegetables and fruits', priority: 'Low' };

// Add tasks
addTask(task1);
addTask(task2);

// View tasks
viewTasks();  // Display tasks

// Update task 1's priority
updateTask(1, { priority: 'Medium' });  // Update task 1

// // View updated tasks 
viewTasks();  // Display updated tasks

// // Delete task 2
// deleteTask(2);  // Delete task 2

// // View remaining tasks
viewTasks();  // Display remaining tasks
