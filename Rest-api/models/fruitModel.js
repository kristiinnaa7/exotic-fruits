const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema.Types;

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  // Ensures each fruit has a unique name
  },
  origin: {
    type: String,
    required: true,  // Fruit's origin is a required field
  },
  description: {
    type: String,
    required: true,  // Description of the fruit, required
  },
  image: {
    type: String,  // URL or path for the fruit's image
    required: false,  // Image is optional
  },

}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Fruit', fruitSchema);
