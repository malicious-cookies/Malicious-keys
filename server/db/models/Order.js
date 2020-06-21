const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  RecipientName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  RecipientEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  recipientAddress: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM,
    values: ['processing', 'completed', 'open']
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: [],
    allowNull: false
  },
  subtotal: {
    type: Sequelize.VIRTUAL,
    get: function() {
      if (this.items && this.items.length)
        return this.items
          .map(item => item.quantity * item.price)
          .reduce((a, b) => a + b, 0)
      else {
        return 0
      }
    }
  }
})

module.exports = Order
