const crypto = require('crypto');
 
// Generate a secure random string
const generateSecret = () => {
    return crypto.randomBytes(32).toString('hex');
};
 
module.exports = {
  JWT_SECRET: generateSecret()
};