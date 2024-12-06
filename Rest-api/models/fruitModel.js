const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema.Types;

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  
  },
  origin: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,  
  },
  image: {
    type: String,  
    required: false,  
  },

}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Fruit', fruitSchema);
