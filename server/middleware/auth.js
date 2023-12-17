import jwt from 'jsonwebtoken';
require('dotenv').config();

export const verifyToken = (req, res, next) => {
    try {
        let token = req.headers('authorization');

        if (!token) {
            return res.status(403).send('Acess Denied');
        }

        if (token.startsWith('Bearer')) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = verified;
        next();

    } catch(error) {
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
}