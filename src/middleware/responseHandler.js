// middleware/responseHandler.js
const responseFormatter = require("../helpers/responseFormatter");

function responseHandler(req, res, next) {
  // Method for successful responses
  res.success = (code, message, data = {}) => {
    res.status(parseInt(code)).json(responseFormatter(code, message, data));
  };

  // Method for error responses
  res.error = (code, message, error = {}) => {
    res
      .status(parseInt(code))
      .json(responseFormatter(code.toString(), message, error));
  };

  next();
}

module.exports = responseHandler;
