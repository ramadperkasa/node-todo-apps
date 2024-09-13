const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/UserRepository");

class AuthService {
  static async register(userId, password, name) {
    const existingUser = await UserRepository.findByUserId(userId);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { user_id: userId, password: hashedPassword, name };
    await UserRepository.create(newUser);

    return { message: "User registered successfully" };
  }

  static async login(userId, password) {
    const user = await UserRepository.findByUserId(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: user.user_id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return { token };
  }
}

module.exports = AuthService;
