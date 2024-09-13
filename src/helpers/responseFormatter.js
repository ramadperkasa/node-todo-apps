function responseFormatter(code, message, data = {}) {
  return {
    code,
    message,
    data,
  };
}

module.exports = responseFormatter;
