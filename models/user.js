const mongoose = require('mongoose'); 
const { Schema, model, models } = mongoose; // Import models to check if User is already defined

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, trim: true, lowercase: true, required: true },
  password: { type: String, trim: true, minlength: 3, required: true }
}, { timestamps: true });

// Check if model already exists to avoid OverwriteModelError
const User = models.User || model('User', userSchema);

module.exports = User;