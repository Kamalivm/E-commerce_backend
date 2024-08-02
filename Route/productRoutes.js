const express = require('express');
const Router = express.Router();
const productController = require("../Controller/productController");
const auth = require('../Middleware/auth')

Router.get('/products', auth ,productController.getAllProducts)
Router.post('/products', productController.postProducts);
Router.put('/products/:id', productController.updateProduct);
Router.delete('/products/:id', productController.deleteProduct);

module.exports = Router;
