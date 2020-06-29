const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  RecipientName: {
    type: Sequelize.STRING
  },
  RecipientEmail: {
    type: Sequelize.STRING
  },
  Status: {
    type: Sequelize.ENUM('PROCESSING', 'CANCELLED', 'COMPLETED'),
    defaultValue: 'PROCESSING',
    allowNull: false
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
