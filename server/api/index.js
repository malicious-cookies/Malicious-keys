const router = require('express').Router()
const {isAdmin} = require('./gatekeepers')
const {Order} = require('../db/models')
module.exports = router

router.use('/users', require('./users'))
router.use('/keyboards', require('./keyboards'))

router.get('/orders', isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll()

    if (orders) res.status(200).json(orders)
    else res.sendStatus(404)
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
