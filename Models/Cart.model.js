const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: { type: String},
    category: { type: String},
    brand : { type : String},
    price: { type: Number},
    discount: { type: Number},
    rating: { type: Number},
    quantity: { type : Number , default:1 },
    image: [{ img: { type: String} }],
    userId : { type : String },
  },
  { versionKey: false }
);

const CartModel = mongoose.model("healthcare_cart", cartSchema);

module.exports = { CartModel };
