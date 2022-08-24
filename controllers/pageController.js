//Init path
const path = require('path')


//ALL ROUTES
const index = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/index.html'))
}

const home = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/index-2.html'))
}

const blog = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/blog.html'))
}

const faq = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/faq.html'))
}

const contact = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/contact.html'))
}

const index3 = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/index-3.html'))
}

const category = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/category-grid.html'))
}

const categoryGrid = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/category-grid-2.html'))
}

const singleProduct = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/single-product.html'))
}

const singleProductSidebar = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/single-product-sidebar.html'))
}

const cart = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/cart.html'))
}

const checkout = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/checkout.html'))
}

const about = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/about.html'))
}


const blogFullwidth = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/blog-fullwidth.html'))
}

const blogPost = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/blog-post.html'))
}

const terms = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/terms.html'))
}

const authentication = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/authentication.html'))
}

const page404 = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/404.html'))
}

const wishlist = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/wishlist.html'))
}

const compare = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/compare.html'))
}

const trackUrOrder = (req,res) => {
    res.status(200).sendFile(path.join( __dirname, '../public/track-your-order.html'))
}


//Export all routes
module.exports = {
    index, home, blog, faq, contact, index3, category, categoryGrid, singleProduct, singleProductSidebar, cart, checkout, about, blogFullwidth, blogPost, terms, page404, wishlist, compare, trackUrOrder, authentication
}