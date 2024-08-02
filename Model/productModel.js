const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    rating: {
        rate: {
            type: Number
        },
        count: {
            type: Number
        }
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
