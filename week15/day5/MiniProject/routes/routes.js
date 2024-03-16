import { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { _getTodos, _addTodo, _removeTodo } from '../controllers/controller.js';

const router = Router();
router.use(bodyParser.json());
router.use(cors());

router.get("/todos", _getTodos);
router.post("/todos", _addTodo);
router.delete('/todos', _removeTodo);

export default router;