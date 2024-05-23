import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post('/', orderControllers.createOrder);
// router.get('/', orderControllers.querySearchingOrder);
router.get('/', orderControllers.getAllOrders);
// what can i do :( ?

export const orderRoutes = router;
