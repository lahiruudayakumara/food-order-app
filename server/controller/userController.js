const express = require('express');
const User = require('../models/userModel')

const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            _id,
        } = req.body;

        const isEmail = await User.findOne({ email: email})

        if(isEmail) {
            return res.status(200).json({ msg: "user already exists"})
        }
    
        const user = new User({
            name,
            email,
            _id,
        })

        user.save()
        return res.status(200).json({ data: user});
        
    } catch (err) {
        return res.status(400).json({ data : err });
    }
}

module.exports = {
    createUser
}