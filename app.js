const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

require("dotenv").config();

const cors = require("cors");

const routes = require("./src/routes/index");

const responseHandler = require("./src/middleware/responseHandler");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(responseHandler);

app.use("/api", routes);

app.use((req, res, next) => {
  next(createError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    code: err.status || 500,
    message: err.message || "Internal Server Error",
    data: {},
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
