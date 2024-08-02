const express=require("express");
const Router=express.Router();
const orderController=require("../Controller/orderController");
const auth = require('../Middleware/auth');

Router.post('/createOrder', auth,orderController.createOrder);
Router.post('/getOrder', auth,orderController.getOrder);

module.exports = Router;