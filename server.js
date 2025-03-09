// survey.js (or server.js)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Sample in-memory data
let tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Build Task Tracker", completed: true }
];

// GET all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// GET a task by ID
app.get('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// POST - Create a new task
app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.status(201).json({ message: 'Task created', task: newTask });
});

// PUT - Update an existing task
app.put('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
        res.json({ message: 'Task updated', task: tasks[taskIndex] });
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

// DELETE - Delete a task
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.json({ message: 'Task deleted' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// 🚀 Now your API is ready! Test with Postman or browser
// - GET: http://localhost:3000/api/tasks
// - GET by ID: http://localhost:3000/api/tasks/1
// - POST: Create a new task
// - PUT: Update task with ID 1
// - DELETE: Delete task with ID 1

// Let me know if you need anything else or run into issues! 🔥