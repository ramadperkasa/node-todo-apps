const TodoService = require("../services/TodoService");

class TodoController {
  static async getTodos(req, res) {
    try {
      const todos = await TodoService.getAllTodos();
      res.success(200, "Todos retrieved successfully", todos);
    } catch (error) {
      res.error(500, "Server error", error);
    }
  }

  static async createTodo(req, res) {
    const { subject, description } = req.body;
    try {
      const newTodo = await TodoService.createTodo(subject, description);
      res.success(201, "Todo created successfully", newTodo);
    } catch (error) {
      res.error(500, "Server error", error);
    }
  }

  static async updateTodo(req, res) {
    const { id } = req.params;
    const { subject, description } = req.body;
    try {
      const updatedTodo = await TodoService.updateTodo(
        id,
        subject,
        description
      );
      res.success(200, "Todo updated successfully", updatedTodo);
    } catch (error) {
      res.error(500, "Server error", error);
    }
  }

  static async markTodo(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const markedTodo = await TodoService.markTodo(id, status);
      res.success(200, "Todo status updated successfully", markedTodo);
    } catch (error) {
      res.error(500, "Server error", error);
    }
  }

  static async deleteTodo(req, res) {
    const { id } = req.params;
    try {
      await TodoService.deleteTodo(id);
      res.success(204, "Todo deleted successfully");
    } catch (error) {
      res.error(500, "Server error", error);
    }
  }
}

module.exports = TodoController;
