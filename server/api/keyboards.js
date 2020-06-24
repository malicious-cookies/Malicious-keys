const router = require('express').Router()
const {Keyboard} = require('../db/models')
const {isAdmin} = require('./gatekeepers')
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

//delete keyboard
router.delete('/:keyboardId', async (req, res, next) => {
  try {
    const keyboardId = req.params.keyboardId
    const keyboardToDelete = await Keyboard.findByPk(keyboardId)
    const deleted = await keyboardToDelete.destroy()
    if (deleted) {
      res.sendStatus(204)
    } else {
      const error = new Error(
        'Failed to delete keyboard to DELETE /api/keyboards/:keyboardId'
      )
    }
  } catch (error) {
    next(error)
  }
})

//update keyboard
router.put('/:keyboardId', isAdmin, async (req, res, next) => {
  try {
    const keyboardId = req.params.keyboardId
    const editKeyboard = await Keyboard.findByPk(keyboardId)
    const updatedKeyboard = await editKeyboard.update(req.body)
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

//Create keyboard
router.post('/:keyboardId', isAdmin, async (req, res, next) => {
  try {
    const newKeyboard = await Keyboard.create(req.body)
    if (newKeyboard) {
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
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
