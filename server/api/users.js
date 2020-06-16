const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//GET: all users
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
