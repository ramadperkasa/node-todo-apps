const AuthService = require("../services/AuthService");

class AuthController {
  static async register(req, res) {
    const { user_id, password, name } = req.body;
    try {
      const result = await AuthService.register(user_id, password, name);
      res.success(201, result.message);
    } catch (error) {
      res.error(400, error.message);
    }
  }

  static async login(req, res) {
    const { user_id, password } = req.body;
    try {
      const result = await AuthService.login(user_id, password);
      res.success(200, "Login successful", result);
    } catch (error) {
      res.error(400, error.message);
    }
  }
}

module.exports = AuthController;
