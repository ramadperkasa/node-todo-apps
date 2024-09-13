const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

// Todos
router.get("/", TodoController.getTodos);
router.post("/", TodoController.createTodo);
router.put("/:id", TodoController.updateTodo);
router.patch("/:id/mark", TodoController.markTodo);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
