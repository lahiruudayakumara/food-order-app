const express = require('express');
const Product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({ data: products });
    } catch (err) {
        res.status(400).send({ error: err });
    }
}

module.exports = {
    getProducts
}