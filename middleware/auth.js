const jwt = require('jsonwebtoken');
const config = require('config');

// middleware function takes 3 params, it has access to
// has access to the req and res objects.
// next is a callback that has to be run
module.exports = function(req, res, next) {
  // GET TOKEN FROM HEADER
  const token = req.header('x-auth-token');
  // CHECK IF NO TOKEN
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  // VERIFY TOKEN
  try {
    // decode token with jwt verify
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // set req.user to the user in the decoded token
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
