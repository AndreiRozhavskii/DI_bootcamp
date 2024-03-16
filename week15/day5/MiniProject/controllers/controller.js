import { getAllTodos, createTodo, deleteTodo } from "../models/models.js";

export const _getTodos = async (req, res) => {
    try {
        const todos = await getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const _addTodo = async (req, res) => {
    const { title } = req.body;
    try {
        const newTodo = await createTodo(title);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const _removeTodo = async (req, res) => {
    const { title } = req.body;
    try {
        const deletedTodo = await deleteTodo(title);
        res.status(200).json(deletedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}