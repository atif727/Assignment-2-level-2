import { Request, Response } from 'express';
import { studentServices } from './student.service';
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createstudentinDB(studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'students is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllstudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'students shown successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await studentServices.getOnestudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'specific student shown successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getOneStudent,
};
