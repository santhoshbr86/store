const {
    Schema,
    model
  } = require("mongoose");

  const cartShema = new Schema({
    name: {
        type:String,
    },
    mrp: {
        type:Number
    },
    qty: {
        type: Number
    },
    qtyCount: {
        type: Number
    },
    sp: {
        type: Number
    },
    unit: {
        type:String
    },
    productImg:{
        type:String
    }
  });

  module.exports = model('cart', cartShema);