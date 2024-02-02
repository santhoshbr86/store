const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.get('/', async(req, res, next) => {
    try {
         const products = Product.find().then(pr => {
            console.log(pr);
            res.status(200).json({products:pr})
        })
      
    }
    catch(error) {
        res.status(500).json({error});
    }
});

router.post('/', async(req, res, next) => {
    try {
        const item = req.body;
        Product.create(item).then(pr => {
            res.status(200).json({response:pr})
        });
    }
    catch(error) {
        res.status(500).json({error});
    }
});

router.patch('/', async(req, res, next) => {
    try {
        const item = req.body;
        Product.updateOne({_id:item._id},{
            $set:{
                name:item.name,
                brand: item.brand,
                barcode:item.barcode,
                category:item.category,
                unit:item.unit,
                mrp:item.mrp,
                sellingPrice: item.sellingPrice,
                purchaseRate:item.purchaseRate,
                quantity:item.quantity,
                stock:item.stock,
                productImg:item.productImg
            }}).then(r => {
            res.status(200).json({response:item.name})
        });
    }
    catch(error) {
        res.status(500).json({error});
    }
});
module.exports = router;
