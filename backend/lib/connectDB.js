import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('✅ Connected to database successfully');
    } catch (err) {
        console.error('❌ Database connection error:', err);
    }
}

export default connectDB;
