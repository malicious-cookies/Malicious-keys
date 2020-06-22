const router = require('express').Router()
const {User, Order} = require('../db/models')
const {isLoggedIn, isAdmin, isSelfOrAdmin} = require('./gatekeepers')
module.exports = router

//get all orders by user
router.get('/:userId/orders', isSelfOrAdmin, async (req, res, next) => {
  try {
    let userId = req.params.userId
    let orders = await Order.findAll({
      where: {
        userId
      }
    })
    if (orders) {
      res.status(200).json(orders)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//get SIGNLE ORDER by USER
router.get(
  '/:userId/orders/:orderId',
  isSelfOrAdmin,
  async (req, res, next) => {
    try {
      let orderId = req.params.orderId
      let order = await Order.findById(orderId)
      if (order) {
        res.status(200).json(order)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      next(error)
    }
  }
)

//create ORDER by USER
router.post('/:userId/orders/', isSelfOrAdmin, async (req, res, next) => {
  try {
    let newOrder = await Order.create(req.body)
    if (newOrder) {
      res.status(200).json(order)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//get one user
router.get('/:userId', isSelfOrAdmin, async (req, res, next) => {
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
router.get('/', isAdmin, async (req, res, next) => {
  try {
    //get all users without password
    const users = await User.findAll({
      attributes: ['id', 'name', 'email']
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

//create a new user UNPROTECTED
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
router.put('/:userId', isSelfOrAdmin, async (req, res, next) => {
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
