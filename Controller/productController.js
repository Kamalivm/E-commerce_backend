const { v4 : uuidv4 } = require('uuid') ;
const Product = require('../Model/productModel');

// GET method
const getAllProducts = async (req, res) => {
    
    try {
        console.log(req.user)
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

// POST method
const postProducts = async (req, res) => {
    try {
        console.log(req.body);
        const { title, description, category, price, image, rating } = req.body;
        const newProduct = new Product({ id : uuidv4(), title, description, category, price, image, rating });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT method
const updateProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params;
        const { title, description, category, price, image, rating } = req.body;
        const updatedProduct = await Product.findOneAndUpdate({ id }, { title, description, category, price, image, rating }, { new: true });
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE method
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findOneAndDelete({ id });
        if (!deletedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllProducts, postProducts, deleteProduct, updateProduct };
