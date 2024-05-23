import express from 'express';
import { KBControllers } from './order.controller';

const router = express.Router();

router.post('/', KBControllers.createKB);
// router.get('/', KBControllers.getAllKBs);
router.get('/:id', KBControllers.getOneKB);
router.put('/:id', KBControllers.UpdateKB);
router.delete('/:id', KBControllers.deleteKB);
router.get('/', KBControllers.querySearchingKB);

export const KBRoutes = router;
