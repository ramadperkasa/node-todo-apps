const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.error(401, "Access denied, no token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.error(403, "Invalid token");
  }
}

module.exports = authenticateJWT;
