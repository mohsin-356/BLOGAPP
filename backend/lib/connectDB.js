import mongoose from 'mongoose';
async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('✅ Connected to database successfully');
    } catch (err) {
        console.error('❌ Database connection error:', err);
    }
}

export default connectDB;
