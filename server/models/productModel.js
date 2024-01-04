const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        pId: { 
            type: Number,
            unique: true 
        },
        name: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        price: {
            type: String, 
            required: true
        },
        category: {
            type: String,
            required: true
        },
        rating: {
            type: [Number],
            default: []            
        }
    }
)

module.exports = mongoose.model('Product', ProductSchema)

