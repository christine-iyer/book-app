const { Schema, model } = require('mongoose')
const bcrypt = require("bcryptjs");

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
  },
  profile: [{ type: Schema.Types.ObjectId, ref: "Profile" }]
}, {
  timestamps: true,

})
userSchema.pre("save", async function (next) {
  // Using regular function here
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare hashed password with input
userSchema.methods.comparePassword = function (candidatePassword) {
  // Regular function for methods as well
  return bcrypt.compare(candidatePassword, this.password);
};




module.exports = model('User', userSchema)