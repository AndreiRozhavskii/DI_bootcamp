const fs = require('fs');
const path = require('path');

const{
    readDataFromFile,
    writeDataToFile
}= require('../models/task.models.js')

const dataFilePath = path.join(__dirname, '..', 'tasks.json');

const getTasks = (req, res) => {
    const tasks = readDataFromFile();
    res.json(tasks);
  };
  
  const getTaskById = (req, res) => {
    const tasks = readDataFromFile();
    const { id } = req.params;
    const task = tasks.find(task => task.id == id);
    console.log('Requested Task ID:', id);
    console.log('All Task IDs:', tasks.map(task => task.id));
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  };
  
  const createTask = (req, res) => {
    const { title, description } = req.body;
    const id = readDataFromFile().length ++
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
  
    const newTask = {
        id: id,
      title,
      description
    };
  
    const tasks = readDataFromFile();
    tasks.push(newTask);
    writeDataToFile(tasks);
  
    res.status(201).json(newTask);
  };
  
  const updateTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
  
    const tasks = readDataFromFile();
    const index = tasks.findIndex(task => task.id == req.params.id);
    if (index !== -1) {
      tasks[index] = { id: req.params.id, title, description };
      writeDataToFile(tasks);
      res.json(tasks[index]);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  };
  
  const deleteTask = (req, res) => {
    let tasks = readDataFromFile(); 
    const { id } = req.params;
    const filteredTasks = tasks.filter(task => task.id != id);
  
    if (tasks.length !== filteredTasks.length) {
      tasks = filteredTasks;
      writeDataToFile(tasks);
      res.json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  };
  
  module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
  };