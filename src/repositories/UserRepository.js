const db = require("../utils/dbConnection");

class UserRepository {
  static async findByUserId(userId) {
    const [rows] = await db.query("SELECT * FROM users WHERE user_id = ?", [
      userId,
    ]);
    return rows[0];
  }

  static async create(user) {
    await db.query(
      "INSERT INTO users (user_id, password, name) VALUES (?, ?, ?)",
      [user.user_id, user.password, user.name]
    );
  }
}

module.exports = UserRepository;
