const User = require('./user')
const Products = require('./products')
const Category = require('./category')
const Order = require('./order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
// Products.belongsToMany(Category, {
//   through: 'products_categories',
//   constraints: false
// })
// Category.belongsToMany(Products, {through: 'products_categories'})

Order.belongsTo(User, {
  as: 'Current',
  foreignKey: 'currentUser',
  constraints: false
})
User.belongsTo(Order)

module.exports = {
  User,
  Products,
  // Category,
  Order
}
