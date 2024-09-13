const TodoRepository = require("../repositories/TodoRepository");
const generateActivitiesNo = require("../helpers/generateActivitiesNo");

class TodoService {
  static async getAllTodos() {
    return TodoRepository.getAll();
  }

  static async createTodo(subject, description) {
    const newTodo = { subject, description, status: "Unmarked" };
    const todoId = await TodoRepository.create(newTodo);
    const activitiesNo = generateActivitiesNo(todoId);
    await TodoRepository.updateActivitiesNo(todoId, activitiesNo);
    return {
      id: todoId,
      activitiesNo,
      subject,
      description,
      status: "Unmarked",
    };
  }

  static async updateTodo(id, subject, description) {
    const todo = await TodoRepository.getById(id);
    if (todo.status !== "Unmarked") {
      throw new Error("Only unmarked todos can be modified");
    }
    todo.subject = subject;
    todo.description = description;
    await TodoRepository.update(id, todo);
    return todo;
  }

  static async markTodo(id, status) {
    const validStatuses = ["Done", "Canceled", "Unmarked"];
    if (!validStatuses.includes(status)) {
      throw new Error("Invalid status");
    }
    const todo = await TodoRepository.getById(id);
    todo.status = status;
    await TodoRepository.update(id, todo);
    return todo;
  }

  static async deleteTodo(id) {
    const todo = await TodoRepository.getById(id);
    if (todo.status !== "Unmarked") {
      throw new Error("Only unmarked todos can be deleted");
    }
    await TodoRepository.delete(id);
  }
}

module.exports = TodoService;
