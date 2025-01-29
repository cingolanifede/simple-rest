import express, { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { validateTask } from "./task-middleware"
import { Task } from "./task.interface"
import { tasks } from "./tasks-mocked"

export const tasksRouter = express.Router()

tasksRouter.get('/tasks', async (req: Request, res: Response) => {
    try {
        return res.status(StatusCodes.OK).json({ total: tasks.length, tasks })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
})

// POST /tasks - Create a new task
tasksRouter.post("/tasks", validateTask, (req: Request, res: Response) => {
    try {
        const { title, completed } = req.body;
        const newTask: Task = { id: tasks.length + 1, title, completed, };
        tasks.push(newTask);
        return res.status(StatusCodes.CREATED).json(newTask)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
})
// PUT /tasks - Update a task
tasksRouter.put("/tasks/:id", validateTask, (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const { title, completed } = req.body;

        const task = tasks.find(t => t.id === id);
        if (!task) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: `No task with ID ${req.params.id}` })
        }

        task.title = title || task.title;
        task.completed = completed !== undefined ? completed : task.completed;

        return res.status(StatusCodes.OK).json(task)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
})


tasksRouter.delete("/tasks/:id", (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const taskIndex = tasks.findIndex(t => t.id === id);

        if (taskIndex === -1) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: `No task with ID ${req.params.id}` })
        }
        tasks.splice(taskIndex, 1);

        return res.status(StatusCodes.OK).end()

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
})