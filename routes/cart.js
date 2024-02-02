const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

router.post('/', async(req, res, next) => {
    try {
        const item = req.body.product;
             Cart.findOne({_id:item._id}).then(r => {
            if(r){
                Cart.updateOne(
                    {_id:item._id},
                    {$set:{qtyCount:item.qtyCount+r.qtyCount}}
                    ).then(pr => {
                   res.status(200).json({response:pr})
                });
            } else {
                Cart.create(item).then(pr => {
                        console.log(pr);
                        res.status(200).json({response:pr})
                    });
            }
        })
        } catch(error) {
            res.status(500).json({error});
        }
});

router.get('/', async(req, res, next) => {
    try {
        Cart.find().then(r => {
            res.status(200).json({response:r})
        })
        } catch(error) {
        res.status(500).json({error});
    }
});

router.patch('/', async(req, res, next) => {
    try {
            Cart.updateOne({_id:req.body.product._id},{$set:{qtyCount:req.body.product.qtyCount}}).then(r => {
            res.status(200).json({response:r})
        })
        } catch(error) {
        res.status(500).json({error});
    }
});

router.delete('/', async(req, res, next) => {
    try {
        Cart.deleteMany({}).then(r => {
            res.status(200).json({response:r})
        })
        } catch(error) {
        res.status(500).json({error});
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        Cart.deleteOne({_id:req.params.id}).then(r => {
            res.status(200).json({response:r})
        })
        } catch(error) {
        res.status(500).json({error});
    }
});





module.exports = router;
