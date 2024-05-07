const express = require("express");
const router = express.Router();
const Shipping = require("../models/Shipping");


router.post("/add" , async (req,res)=>{
    const { address, city, pincode,User,purchaseOrderId,customerId  } = req.body;
    const Shippingr = await Shipping.findOne({ address: address });
    if (Shippingr) {
      // status code by default is 200
      return res
        .status(403)
        .json({ error: "A Shipping  with this address already exists"});
    }
    const newShippingrData = {
        address, city, pincode, User,customerId,purchaseOrderId
      };

      const newShipping = await Shipping.create(newShippingrData);

      
      return res.status(200).json(newShipping);


})

router.get("/show" , async (req,res)=>{
    const shippingDetails =  await Shipping.find()
    
    return res.status(200).json(shippingDetails);

})

module.exports = router;