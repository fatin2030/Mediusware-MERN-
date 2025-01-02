// const jwt = require('jsonwebtoken');
// const JWT_SECRET = require('./JWT_Secrets').JWT_SECRET;

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.header('Authorization');

//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   const token = authHeader.split(' ')[1]; // Extract the token

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
//     req.user = decoded; // Set the user object with the _id
//     console.log("Decoded userId:", decoded);
//     console.log("req.user:", req.user);
//     next(); // Continue to the next middleware or route
//   } catch (err) {
//     console.error(err.message);
//     if (err.name === 'TokenExpiredError') {
//       return res.status(401).json({ message: 'Token expired, authorization denied' });
//     } else {
//       return res.status(401).json({ message: 'Invalid token, authorization denied' });
//     }
//   }
// };

// module.exports = authMiddleware;
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./JWT_Secrets').JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        req.user = decoded; // Assuming the JWT contains the user ID (decoded should have the user ID)
      //  console.log("Decoded JWT Payload:", decoded);
        next(); // Continue to the next middleware or route
    } catch (err) {
        console.error(err.message);
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired, authorization denied' });
        } else {
            return res.status(401).json({ message: 'Invalid token, authorization denied' });
        }
    }
};

module.exports = authMiddleware;
