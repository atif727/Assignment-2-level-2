"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = require("mongoose");
const KBSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
});
exports.orderModel = (0, mongoose_1.model)('orders', KBSchema);
