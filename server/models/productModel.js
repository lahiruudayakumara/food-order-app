const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
    }
)

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        adjective: {
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
    }
)

module.exports = mongoose.model('Product', ProductSchema)

