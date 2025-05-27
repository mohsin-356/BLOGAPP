import express from 'express';
const router = express.Router();

router.get("/C-TEST",(req,res)=>{
    res.status(200).send('<h1>COMMENT ROUTE</h1>');
});

export default router;