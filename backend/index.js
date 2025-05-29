import express from 'express';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
res.json({
  message: error.message || 'something went wrong',
  status: error.status || 500,
  stack: process.env.NODE_ENV === 'development' ? error.stack : null
});
});

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});
