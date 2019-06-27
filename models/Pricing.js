const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PricingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
});

module.exports = Pricing = mongoose.model('pricing', PricingSchema);