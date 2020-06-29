const router = require('express').Router()
const {Products} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()

    if (categories) {
      res.json(categories)
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
    const id = req.params.id
    const productBycategory = await Products.findAll({where: {category: id}})
    // {
    //   include: [{model: Category}]
    // })

    if (productBycategory) {
      res.json(productBycategory)
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
