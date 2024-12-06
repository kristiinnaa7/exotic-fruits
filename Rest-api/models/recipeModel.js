const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, 
        },
        ingredients: [
            {
                type: String, 
                required: true,
            },
        ],
        userId: {
            type: ObjectId,
            ref: 'User', 
            required: false,
        },
       
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } 
);

module.exports = mongoose.model('Recipe', recipeSchema);
