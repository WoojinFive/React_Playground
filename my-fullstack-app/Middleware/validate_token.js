const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const validateToken = (req, res, next) => {
  // read the token from header or url 
  const token = req.headers['x-auth-token'];

  // token does not exist
  if(!token) {
    return res.status(401).json({
        success: false,
        message: 'Access is Denied'
    })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) return res.status(403).json({
      success: false,
      message: err.message
    })

    next();
  });
}

module.exports = validateToken;