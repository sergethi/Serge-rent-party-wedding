const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 100
  },
  description: {
    type: Sequelize.TEXT
    // validate: {
    //   notEmpty: true
    // }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn.techpp.com/wp-content/uploads/2019/12/Mechanical-Keyboard-Buying-Guide-1200x857.jpeg'
  },
  category: {
    type: Sequelize.STRING,
    allownull: false
    // validate: {
    //   notEmpty: true
    // }
  }
})

module.exports = Products
