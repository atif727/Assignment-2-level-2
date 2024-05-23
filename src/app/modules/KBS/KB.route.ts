import express from 'express';
const router = express.Router();
import { KBControllers } from './KB.controller';

router.post('/', KBControllers.createKB);
// router.get('/', KBControllers.getAllKBs);
router.get('/', KBControllers.querySearchingKB);
router.get('/:id', KBControllers.getOneKB);
router.put('/:id', KBControllers.UpdateKB);
router.delete('/:id', KBControllers.deleteKB);

export const KBRoutes = router;
