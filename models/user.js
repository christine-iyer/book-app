const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  }
}, {
  timestamps: true,

})
const User = model('User', userSchema)
module.exports = User