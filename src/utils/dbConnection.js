const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo-apps",
  port: 3300,
});

module.exports = connection;
