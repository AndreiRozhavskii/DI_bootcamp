import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todos.css";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const deleteTodo = async (title) => {
        try {
            await axios.delete(`http://localhost:3001/todos`, { data: { title } });
            fetchTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const addTodo = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3001/todos`, { title: newTodo });
            setNewTodo("");
            fetchTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3001/todos");
            setTodos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todos</h1>
            {todos.length === 0 ? (
                <p>You have no todos!</p>
            ) : (
                <ul className="collection">
                    {todos.map((todo) => (
                        <li key={todo.id} onClick={() => deleteTodo(todo.title)} className="collection-item">
                            <span>{todo.title}</span>
                        </li>
                    ))}
                </ul>
            )}
            <form onSubmit={addTodo} className="form">
                <label>Add a new todo:</label>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    required
                />
                <button onClick={addTodo()}>Add</button>
            </form>
        </div>
    );
};

export default Todos;