const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  pictureURI: {
    type: String,
    required: [true, 'Please provide a picture'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: [true, 'Give a quantity'],
  },
});

// ProductSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// ProductSchema.methods.matchPasswords = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
