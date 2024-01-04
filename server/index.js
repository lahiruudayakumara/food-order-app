const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const DBConnection = require('./config/dbConfig');
const product = require('./routes/productRoutes');
const user = require("./routes/userRoutes");
const category = require("./routes/categoryRoutes");

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials:  true ,origin: "http://localhost:3000",}));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// Routes
app.use('/product', product);
app.use('/user', user);
app.use('/category', category);

DBConnection().then(() => {
    app.listen(PORT, () => {
        console.log('🚀 Database Connect Sucessfully 📚');
        console.log(`🚀🚀🚀 Server runing Port is ${PORT}🚀`);
    });
}).catch((err) => {
    console.error('While connecting with the database', err.message);
});