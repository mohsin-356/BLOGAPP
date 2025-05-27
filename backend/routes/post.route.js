import express from 'express';
const router = express.Router();

router.get("/P-TEST",(req,res)=>{
    res.status(200).send('<h1>POST ROUTE</h1>');
});

export default router;