const mongoose = require('mongoose');

const DBConnection = async () => {
    const Url = process.env.MONGODB_URL;
    try {
        mongoose.connect(Url);
    } catch(err) {
        console.error('While connecting with the database', error.message);
    }
}

module.exports = DBConnection;