const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  RecipientName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM,
    values: ['processing', 'completed', 'open']
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
  },
  subtotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Orders
