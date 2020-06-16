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
  },
  imageURL:{
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.techpp.com/wp-content/uploads/2019/12/Mechanical-Keyboard-Buying-Guide-1200x857.jpeg'
  }
})

module.exports = Keyboard
