const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DBConnection = require('./config/dbConfig');
const product = require('./routes/productRoutes');
const user = require("./routes/userRoutes");
const category = require("./routes/categoryRoutes");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8080;

// Routes
app.use('/product', product);
app.use('/user', user);
app.use('/category', category)

DBConnection().then(() => {
    app.listen(PORT, () => {
        console.log('🚀 Database Connect Sucessfully 📚');
        console.log(`🚀🚀🚀 Server runing Port is ${PORT}🚀`);
    });
}).catch((err) => {
    console.error('While connecting with the database', err.message);
});

