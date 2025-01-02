const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'user',
  },
  profilePic: {
    type: String,
    },
  deleted: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
  
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

module.exports = mongoose.model('User', UserSchema);
