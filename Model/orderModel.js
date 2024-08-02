const mongoose=require('mongoose');
const orderModel=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    orderdate:{
        type:Date,
        require:true,
        default: Date.now
    },
    deliverydate:{
        type:Date,
        require:true
    },
    products:{
        type:String,
        require:true
    },
    totalamount:{
        type:String,
        require:true
    },
    orderstatus:{
        type:String,
        require:true
    },
    user_id:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

});
const Order=mongoose.model("Order",orderModel);
module.exports=Order;
