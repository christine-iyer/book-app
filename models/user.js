const { Schema, model } = require('mongoose')

const userSchema = new Schema({
     username: { type: String, required: true },
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
     profile: [{type: Schema.Types.ObjectId, ref: "Profile"}]
   }, {
     timestamps: true,

   })
module.exports = model('User', userSchema)