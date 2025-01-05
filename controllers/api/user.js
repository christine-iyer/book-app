require('dotenv').config()

const User = require('../../models/User')

const signUp = async (req, res) => {
     try {
          const user = new User({
               name: req.body.name
          })
          const newUser = await user.save()
          res.status(201).json(newUser)
     }
     catch(err){
          res.status(400).json({message: err.message})
     }
}
module.exports = {signUp}