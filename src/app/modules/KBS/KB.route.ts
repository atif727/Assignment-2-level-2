import express from 'express';
import { KBControllers } from './KB.controller';

const router = express.Router();

router.post('/', KBControllers.createKB);
router.get('/', KBControllers.getAllKBs);
router.get('/:id', KBControllers.getOneKB);
router.put('/:id', KBControllers.UpdateKB);
router.delete('/:id', KBControllers.deleteKB);

export const KBRoutes = router;
