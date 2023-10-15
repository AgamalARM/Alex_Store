const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const productBuyerSchema = new Schema({
    product: {
        type: String,
        require: true
    },
    description: {
        type: String,
        
    },
    price: {
        type: Number,
        require: true
    },
    VAT: {
        type: Boolean,
        require: true
    },
    shipping: {
        type: Number,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    merchant: {
        type: String,
        require: true
    },
    addToCard: {
        type: Boolean,
        require: true
    }

}, {timestamps: true});