const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router


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


router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.param.userId)
  } catch (error) {
    next(error)
  }
})


router.get('/', async (req, res, next) => {
  try {
    //get all users without password
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
