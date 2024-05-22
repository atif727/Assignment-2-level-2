import { Student } from './student.interface';
import { studentModel } from '../student.model';
const createstudentinDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllstudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getOnestudentFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createstudentinDB,
  getAllstudentsFromDB,
  getOnestudentFromDB,
};
