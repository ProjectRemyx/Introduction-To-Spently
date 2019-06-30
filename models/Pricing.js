const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PricingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        bulletOne:{
            type: String
        },
        bulletTwo:{
            type: String
        },
        bulletThree:{
            type: String
        },
        bulletFour:{
            type: String
        },
        bulletFive:{
            type: String
        }
    },
    price:{
        type: String,
        required: true
    },
    order: {
        type: Number
    }
});

module.exports = Pricing = mongoose.model('pricing', PricingSchema);