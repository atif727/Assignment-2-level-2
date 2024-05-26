import { Schema, model } from 'mongoose';
import { KB, variant, inventory } from './KB.interface';

const varriantSchema = new Schema<variant>(
  {
    type: {
      type: String,
      required: [true, 'define the type'],
      trim: true,
    },
    value: {
      type: String,
      required: [true, 'define the value'],
      trim: true,
    },
  },
  { _id: false },
);

const inventorySchema = new Schema<inventory>(
  {
    quantity: {
      type: Number,
      required: [true, 'product quanitity is essential'],
      min: [0, 'you cannot put negetive values'],
      trim: true,
    },
    inStock: {
      type: Boolean,
      required: [true, 'set it to false if 0 or else keep it true'],
      trim: true,
    },
  },
  { _id: false },
);

const KBSchema = new Schema<KB>({
  id: {
    type: String,
    required: [true, 'give an id'],
    minlength: [6, 'id: not less than 6 digits'],
    maxlength: [6, 'id: not more than 6 digits'],
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'give a name of the product'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'need description'],
    minlength: [40, 'description: not less than 40 characters'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'give a price to the product'],
    min: [0, 'you cannot give negetive value'],
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  variants: [varriantSchema],
  inventory: inventorySchema,
});

export const KBModel = model<KB>('kbs', KBSchema);
