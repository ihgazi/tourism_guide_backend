require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');
const db = process.env.MONGO_URI;

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;