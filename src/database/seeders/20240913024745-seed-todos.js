"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todos", [
      {
        activities_no: "AC-0001",
        subject: "Learn Sequelize",
        description: "Understand how to use Sequelize ORM",
        status: "Unmarked",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        activities_no: "AC-0002",
        subject: "Build Express API",
        description: "Create an API using Express and Sequelize",
        status: "Unmarked",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todos", null, {});
  },
};
