import { Schema, model } from 'mongoose';
import { KB, variant } from './order.interface';

const varriantSchema = new Schema<variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const KBSchema = new Schema<KB>({
  id: { type: String, required: true },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: [{ type: String }],
  variants: [varriantSchema],
  inventory: { quantity: Number, inStock: Boolean },
});

export const orderModel = model<KB>('orders', KBSchema);
