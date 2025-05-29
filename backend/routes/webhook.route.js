// import express from 'express';
// import { clerkWebHook } from '../controllers/webhook.controller';
// const router = express.Router();
// router.post('/clerk',clerkWebHook); 
// export default router;

import express from 'express';
import { clerkWebHook } from '../controllers/webhook.controller.js'; // ✅ Added .js extension

const router = express.Router();

router.post('/clerk', clerkWebHook); 

export default router;