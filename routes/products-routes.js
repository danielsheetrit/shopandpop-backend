const express = require('express')
const { getProducts, getSingleProduct } = require('../controllers/products-controller')

const router = express.Router()

router.get('/products/:category', getProducts)
router.get('/product/:id', getSingleProduct)


module.exports = {
    routes: router
}