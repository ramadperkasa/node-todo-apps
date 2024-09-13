const db = require("../utils/dbConnection.js");

class TodoRepository {
  static async getAll() {
    const [rows] = await db.query("SELECT * FROM todos");
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
    return rows[0];
  }

  static async create(todo) {
    const result = await db.query(
      "INSERT INTO todos (subject, description, status) VALUES (?, ?, ?)",
      [todo.subject, todo.description, todo.status]
    );
    return result[0].insertId;
  }

  static async update(id, todo) {
    await db.query(
      "UPDATE todos SET subject = ?, description = ?, status = ? WHERE id = ?",
      [todo.subject, todo.description, todo.status, id]
    );
  }

  static async updateActivitiesNo(id, activitiesNo) {
    await db.query("UPDATE todos SET activities_no = ? WHERE id = ?", [
      activitiesNo,
      id,
    ]);
  }

  static async delete(id) {
    await db.query("DELETE FROM todos WHERE id = ?", [id]);
  }
}

module.exports = TodoRepository;
