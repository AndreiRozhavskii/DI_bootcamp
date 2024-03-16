import { db } from "../config/db.js";

export const getAllTodos = async () => {
    return await db("todo").select("*");
};

export const createTodo = async (title,description) => {
    return await db("todo").insert({ title, description });
};

export const deleteTodo = async (title) => {
    return await db("todo").where({ title }).del();
}