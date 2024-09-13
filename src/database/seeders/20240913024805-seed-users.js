"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash("password123", 10);

    return queryInterface.bulkInsert("users", [
      {
        user_id: "user001",
        name: "John Doe",
        password: hashedPassword,
        created_at: new Date(),
      },
      {
        user_id: "user002",
        name: "Jane Doe",
        password: hashedPassword,
        created_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
