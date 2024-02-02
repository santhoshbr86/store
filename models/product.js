const {
    Schema,
    model
  } = require("mongoose");

  const ProductShema = new Schema({
    name: {
        type:String,
        required: true
    },
    barcode:{
        type:String,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    mrp:{
        type:Number,
        required:true
   },
    purchaseRate: {
        type:Number,
        required:true
    },
    sellingPrice:{
        type: Number,
        required: true
    },
    quantity: {
        type:Number,
        required:false
    },
    stock:{
        type: Number,
        required:false
    },
    unit:{
        type:String,       
        required:true
    },
    productImg: {
        type:String
    }
});

module.exports = model('product', ProductShema);
