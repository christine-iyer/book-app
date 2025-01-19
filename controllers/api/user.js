require('dotenv').config()

const { get } = require('mongoose')
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

const updateUser = async (req, res, next) => {
     try {
         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
         res.locals.data.user = updatedUser
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }

const deleteUser = async (req, res, next) => {
     try {
         const user = await User.findByIdAndDelete(req.params.id)
         res.locals.data.user = user
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 const getUsers = async (req, res) => {
     try {
         const users = await User.find()
         res.status(200).json(users)
     } catch (error) {
         res.status(500).json({ msg: error.message })
     }
 }
 
module.exports = {signUp, updateUser, deleteUser, getUsers}