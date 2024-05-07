const mongoose = require('mongoose');

const Shipping = new mongoose.Schema({
    
  address: { 
    type: String, 
    required: true
    
   },
  city: { 
    type: String, 
    required: true
    
   },
  pincode: { 
     type: Number,
     required: true 
    
  },
  purchaseOrderId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'PurchaseOrder',
  },
  customerId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Customer',
  },
  User:{
   type:mongoose.Schema.ObjectId,
   ref:'User'
 } 
});

const ShippingModel =mongoose.model('Shipping', Shipping);

module.exports = ShippingModel;

