const Product = require("../models/Products");

module.exports = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.getProducts();
    res.render("products/all", { products });
  }

  static createProduct(req, res) {
    res.render("products/create");
  }

  static createProductPost(req, res) {
    const name = req.body.name;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(name, image, price, description);
    product.save();

    res.redirect("/products");
  }
  static async getProduct(req, res){
    const id = req.params.id;
    const product = await Product.getProductById(id);

    res.render('products/product', {product})
  }
};
