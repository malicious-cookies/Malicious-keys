const router = require('express').Router()
const {Keyboard} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const keyboards = await Keyboard.findAll()
    //keyboards should hold objects of all the keyboards
    res.json(keyboards)
  } catch (error) {
    next(error)
  }
})
