const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

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
