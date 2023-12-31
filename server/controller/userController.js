const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

//SignUp User
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const isEmail = await User.findOne({ email: email})

        if(isEmail) {
            return res.status(409).json({ msg: "user already exists"})
        }
    
        const user = new User({ name, email, password: hashedPassword })
        user.save()
        return res.status(200).json({ msg: "sucess" , user : user});
        
    } catch (err) {
        return res.status(400).json({ data : err });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if(!user) {
            return res.status(409).json({ msg: "User does not exists"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(409).json({ msg : "Invalid Creditional"});
        }

        const userCopy = {...user.toObject()}
        delete userCopy.password;
        const token = jwt.sign(userCopy, "sadsdasdasd");

        return res.status(200).json({ token, user });
    } catch(err) {
        return res.status(400).json({ data : err });
    }
}

module.exports = {
    signup,
    login
}