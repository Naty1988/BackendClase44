let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({

    user: { type: String, required: false },
    products: { type: Array, required: false  },
    
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart