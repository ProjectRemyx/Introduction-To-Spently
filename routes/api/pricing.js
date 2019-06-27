const express = require('express');
const router = express.Router();

//Pricing Model
const Pricing = require('../../models/Pricing');

//@route    GET api/pricing
//@desc     Get all pricing tiers
//@access   Public
router.get('/', (req, res) => {
    Pricing.find()
        .sort({ price: 1 })
        .then(pricing => res.json(pricing))
});

//@route    POST api/pricing
//@desc     Create a pricing tier
//@access   Public
router.post('/', (req, res) => {
    try{
        const newPricing = new Pricing({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
        });  
        //Take the pricing tier and spit it out as a json
        newPricing.save().then(pricing => res.json(pricing));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
