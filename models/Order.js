

const mongoose = require('mongoose');

const PurchaseOrder = new mongoose.Schema({

  productName: { 
    type: String, 
    required: true
    
   },
  quantity: { 
    type: Number, 
    required: true
    
   },
  pricing: {
     type: Number, 
    required: true 
    
  },
  mrp: { 
    type: Number,
     required: true 
    
  },
  purchaseOrderId: { 
     type: String,  
    //  unique: true /
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

const PurchaseOrderModel = mongoose.model('PurchaseOrder',PurchaseOrder);
module.exports = PurchaseOrderModel;


















