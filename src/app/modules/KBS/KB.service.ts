import { KB } from './KB.interface';
import { KBModel } from './KB.model';

const createKBinDB = async (KB: KB) => {
  const result = await KBModel.create(KB);
  return result;
};

const getAllKBsFromDB = async () => {
  const result = await KBModel.find();
  return result;
};

const getOneKBFromDB = async (id: string) => {
  const result = await KBModel.findOne({ id });
  console.log(result);
  return result;
};

const getOneKBFromDBwith_id = async (_id: string) => {
  const result = await KBModel.findOne({ _id });
  console.log(result);
  return result;
};

const deleteOneKBFromDB = async (id: string) => {
  const result = await KBModel.deleteOne({ id });
  return result;
};

const updateKBFromDB = async (id: string, updatedKB: KB) => {
  const result = await KBModel.findByIdAndUpdate(id, updatedKB, { new: true });
  return result;
};

const searchKBFromDB = async (searchTerm: string | number) => {
  let result = await KBModel.find({
    name: { $regex: searchTerm, $options: 'i' },
  });
  return result;
};

export const KBServices = {
  createKBinDB,
  getAllKBsFromDB,
  getOneKBFromDB,
  deleteOneKBFromDB,
  updateKBFromDB,
  searchKBFromDB,
  getOneKBFromDBwith_id,
};
