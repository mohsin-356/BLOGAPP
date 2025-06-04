import express from 'express';
import { clerkWebHook } from '../controllers/webhook.controller.js';
import bodyParser from 'body-parser';

const router = express.Router();

// Use raw body parser for webhook verification
router.post('/clerk', bodyParser.raw({ type: 'application/json' }), clerkWebHook);

export default router;
// import express from 'express';
// import { clerkWebHook } from '../controllers/webhook.controller.js';
// import bodyParser from 'body-parser';

// const router = express.Router();

// const rawBodyMiddleware = bodyParser.raw({ type: 'application/json' });

// router.post('/clerk', rawBodyMiddleware, (req, res, next) => {
//   try {
//     // Convert raw body to JSON
//     if (req.body) {
//       req.body = JSON.parse(req.body.toString());
//     }
//     next();
//   } catch (error) {
//     console.error('Error parsing webhook body:', error);
//     res.status(400).json({ message: 'Invalid JSON payload' });
//   }
// }, clerkWebHook);

// export default router;