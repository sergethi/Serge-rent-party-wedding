const router = require('express').Router()
const {Products, Category} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll()
    // { include: [{
    //   models: Category, attributes: ['id']
    // }]}
    if (products) {
      res.json(products)
    } else {
      const err = new Error('products not found!!!!')
      err.status = 404
      return next(err)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id)
    // {
    //   include: [{model: Category}]
    // })

    if (product) {
      res.json(product)
    } else {
      const err = new Error('products not found!!!!')
      err.status = 404
      return next(err)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
