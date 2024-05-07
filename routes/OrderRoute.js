const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


router.post("/add" , async (req,res)=>{
    const { productName, quantity, pricing , mrp,User,customerId } = req.body;
    const Orderr = await Order.findOne({ productName: productName });
    if (Orderr) {
      // status code by default is 200
      return res
        .status(403)
        .json({ error: "A Order with this name already exists"});
    }
    const newOrderrData = {
        productName, quantity, pricing , mrp,User,customerId
      };

      const newOrder = await Order.create(newOrderrData);

      
      return res.status(200).json(newOrder);


})

router.get("/show" , async (req,res)=>{
  const orderDetails =  await Order.find()
  
  return res.status(200).json(orderDetails);

})

module.exports = router;