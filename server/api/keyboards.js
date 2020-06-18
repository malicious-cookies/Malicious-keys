const router = require('express').Router()
const {Keyboard} = require('../db/models')
module.exports = router

//get one keyboard
router.get('/:keyboardId', async (req, res, next) => {
  try {
    const keyboard = await Keyboard.findByPk(req.params.keyboardId)
    if (keyboard) {
      res.status(200).json(keyboard)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//update keyboard
router.put('/:keyboardId', async (req, res, next) => {
  try {
    const updatedKeyboard = await Keyboard.update(req.body)
    if (updatedKeyboard) {
      res.status(200).json(updatedKeyboard)
    } else {
      const error = new Error('Failed to PUT /api/key/:keyboardId')
      error.status = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
})

//get all keyboards
router.get('/', async (req, res, next) => {
  try {
    const keyboards = await Keyboard.findAll()
    //keyboards should hold objects of all the keyboards
    if (keyboards) {
      res.status(200).json(keyboards)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
