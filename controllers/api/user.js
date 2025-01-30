require('dotenv').config()

const { get } = require('mongoose')
const User = require('../../models/user')

const signUp = async (req, res, next) => {
     try {
          const {username, email, password} = req.body
          const user = new User({username, email, password})
          await user.save()
          res.status(201).json({message: "User created"})
          
     }
     catch(err){
          res.status(400).json({message: err.message})
     }
}
const updateUser = async (req, res, next) => {
     const { id } = req.params
     const { username, email, password } = req.body
     try {
          const updatedUser = await User.findByIdAndUpdate(
               id,
               { username, email, password },
               { new: true, runValidators: true }             
          )

          if (!updatedUser) {
               return res.status(404).json({ message: "User not found" })
          }
          res.status(200).json(updatedUser)  
     }
     catch(err){
          res.status(400).json({message: err.message})
     }         
}
const deleteUser = async (req, res, next) => {
     const { id } = req.params
     try {
          const deletedUser = await User.findByIdAndDelete(id)
          if (!deletedUser) {
               return res.status(404).json({ message: "User not found" })
          }
          res.status(200).json({ message: "User deleted" })
     }
     catch(err){
          res.status(400).json({message: err.message})
     }
}

const listUsers = async (req, res) => {
     try {
          const users = await User.find({}, "_id username" 

          )
          res.status(200).json(users)
     }
     catch(err){
          res.status(400).json({message: err.message})
     }
}
const getUser = async (req, res, next) => {
     const { id } = req.params
     try {
          const user = await User.findById(id)
          if (!user) {
               return res.status(404).json({ message: "User not found" })
          }
          res.status(200).json(user)
     }
     catch(err){
          res.status(400).json({message: err.message})
     }
}

module.exports = {signUp, updateUser, deleteUser, listUsers, getUser}