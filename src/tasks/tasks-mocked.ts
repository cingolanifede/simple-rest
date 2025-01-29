import { Task } from "./task.interface";

// In-memory storage for tasks
export let tasks: Task[] = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];
