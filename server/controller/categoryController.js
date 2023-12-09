const Category = require('../models/categoryModel');

const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).json({ data: category });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

module.exports = {
    getCategory
}