const Sequelize = require('sequelize')
const db = require('../db')

const Keyboard = db.define('keyboard', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 100
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Keyboard
