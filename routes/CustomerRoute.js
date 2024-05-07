const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");


router.post("/add" , async (req,res)=>{
    const { name, email, mobile , city,User } = req.body;
    const customerResult = await Customer.findOne({ email: email });
    if (customerResult) {
      // status code by default is 200
      return res
        .status(403)
        .json({ error: "A customer with this email already exists"});
    }
    const newCustomerrData = {
        name, email, mobile , city,User,
      };

      const newCustomer = await Customer.create(newCustomerrData);

      
      return res.status(200).json(newCustomer);


})

router.get("/show" , async (req,res)=>{
  const CustomerDetails =  await Customer.find()
  
  return res.status(200).json(CustomerDetails);

})


module.exports = router;