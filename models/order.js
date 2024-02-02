const {
    Schema,
    model,
    SchemaType
  } = require("mongoose");
    
const item = new Schema({
        name: {
            type:String,
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

const orderShema = new Schema({
        cartDetails:[item],
        totalCost: {
            type:Number
        }
});

  module.exports = model('order', orderShema);