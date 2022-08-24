const express = require('express')
const { home, index, blog, faq, contact, index3, category, categoryGrid, singleProduct, singleProductSidebar, cart, checkout, about, blogFullwidth, blogPost, terms, page404, wishlist, compare, trackUrOrder, authentication } = require('../controllers/pageController')

//init router from express
const router = express.Router()

router.get('/index', index)
router.get('/home', home)
router.get('/blog', blog)
router.get('/faq', faq)
router.get('/contact', contact)
router.get('/index3', index3)
router.get('/category', category)
router.get('/categoryGrid', categoryGrid)
router.get('/singleProduct', singleProduct)
router.get('/singleProductSidebar', singleProductSidebar)
router.get('/cart', cart)
router.get('/checkout', checkout)
router.get('/about', about)
router.get('/blogFullwidth', blogFullwidth)
router.get('/blogPost', blogPost)
router.get('/terms', terms)
router.get('/page404', page404)
router.get('/wishlist', wishlist)
router.get('/compare', compare)
router.get('/trackUrOrder', trackUrOrder)
router.get('/authentication', authentication)

module.exports  = router