import express from 'express';
const router = express.Router();

router.get("/U-TEST",(req,res)=>{
    res.status(200).send('<h1>USER ROUTE</h1>');
});
export default router;