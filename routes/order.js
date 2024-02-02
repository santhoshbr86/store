const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/',(req, res) => {
    Order.create(req.body).then(r => {
        res.status(200).json({response:r});
    }).catch((error) => {
        res.status(500).json({error});
    })
});

module.exports = router;
