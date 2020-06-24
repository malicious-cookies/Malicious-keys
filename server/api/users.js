const router = require('express').Router()
const {User, Order} = require('../db/models')
const {isLoggedIn, isAdmin, isSelfOrAdmin} = require('./gatekeepers')
module.exports = router

//GET ALL USERS
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

//GET SINGLE USER
router.get('/:userId', isSelfOrAdmin, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    if (user) {
      res.status(200).json({
        id: user.id,
        isAdmin: user.isAdmin,
        name: user.name,
        email: user.email
      })
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//GET ORDERS BY USER
router.get('/:userId/orders', isSelfOrAdmin, async (req, res, next) => {
  try {
    let orders = await Order.findAll({
      where: {
        userId: req.params.userId
      }
    })
    if (orders) {
      res.json(orders)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//GET SIGNLE ORDER by USER
router.get(
  '/:userId/orders/:orderId',
  isSelfOrAdmin,
  async (req, res, next) => {
    try {
      let orderId = req.params.orderId
      let order = await Order.findOne({
        where: {
          orderId
        }
      })
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

//CREATE ORDER by USER
router.post('/:userId/orders/', isSelfOrAdmin, async (req, res, next) => {
  try {
    let orderBody = req.body
    console.log('ORDERRRR===', orderBody)
    orderBody.userId = req.params.userId
    let newOrder = await Order.create(orderBody)
    if (newOrder) {
      res.status(200).json(newOrder)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

//CRATE NEW USER (UNPROTECTED)
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
