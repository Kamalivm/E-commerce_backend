const express = require("express")
const Router = express.Router();
const cartController = require("../Controller/cartController")
const auth =require('../Middleware/auth')

Router.post("/addCart",auth,cartController.addCart);
Router.get("/getCart",auth,cartController.getCart)
Router.delete("/deleteCart",auth,cartController.deleteCart)


module.exports = Router;