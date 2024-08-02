const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
    },
    products : [
        {
            product_id : {
                type : String,
            },
            quantity : {
                type : String,
            }
        }
    ]
})
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;