import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/test',(req, res) => {
    res.status(200).send('Test endpoint is working!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
