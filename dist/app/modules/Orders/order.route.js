"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KBRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post('/', order_controller_1.KBControllers.createKB);
// router.get('/', KBControllers.getAllKBs);
router.get('/:id', order_controller_1.KBControllers.getOneKB);
router.put('/:id', order_controller_1.KBControllers.UpdateKB);
router.delete('/:id', order_controller_1.KBControllers.deleteKB);
router.get('/', order_controller_1.KBControllers.querySearchingKB);
exports.KBRoutes = router;
