const Product = require('../models/Products');

module.exports = class ProductController {
    static showProducts(req, res) {
        res.render('products/all')
    }
}