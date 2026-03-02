const mongoose = require('mongoose')
exports.connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL is not defined in .env file');
        }
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection error:', error.message);
        if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
            console.log('DNS Error: Check your MONGO_URL in .env file');
        }
        process.exit(1);
    }
}