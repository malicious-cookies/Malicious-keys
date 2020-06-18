const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//create a new user
router.post('/', async (req, res, next) => {
  try {
    const createUser = await User.create(req.body)
    if (createUser) {
      res.status(200).json(createUser)
    } else {
      const error = new Error('Failed to POST /api/user')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})

//update user
router.put('/:userId', async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body)
    if (updatedUser) {
      res.status(200).json(updatedUser)
    } else {
      const error = new Error('Failed to PUT user')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})

//get one user
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.param.userId)
    if (user) {
      res.status(200).json(user)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//get all users
router.get('/', async (req, res, next) => {
  try {
    //get all users without password
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    if (users) {
      res.json(users)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})
