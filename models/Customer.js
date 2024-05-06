const mongoose = require('mongoose');

const Customer= new mongoose.Schema({
  name: {
     type: String,
      required: true
     },
     email: {
     type: String, 
    required: true 
    
  },
  mobile: {
     type: String, 
    required: true 
    
  },
  city: { 
    type: String,
     required: true 
    
  },
  customerId: {
     type: String,
     unique: true
    
   }
});

const CustomerModel = mongoose.model("Customer", Customer);
    module.exports = CustomerModel;


