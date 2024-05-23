"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = require("mongoose");
const varriantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const KBSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: [{ type: String }],
    variants: [varriantSchema],
    inventory: { quantity: Number, inStock: Boolean },
});
exports.orderModel = (0, mongoose_1.model)('orders', KBSchema);
