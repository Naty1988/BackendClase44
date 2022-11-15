let mongoose = require('mongoose');
let model = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: { type: String, required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  });
  
  const Product = mongoose.model("product", productSchema);
  
module.exports = Product 
