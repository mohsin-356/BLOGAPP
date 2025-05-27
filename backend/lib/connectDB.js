import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blogapp');
        console.log('✅ Connected to database successfully');
    } catch (err) {
        console.error('❌ Database connection error:', err);
    }
}

export default connectDB;
