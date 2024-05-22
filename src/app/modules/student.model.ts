import { Schema, model, connect } from 'mongoose';
import { Student, userName } from './students/student.interface';
const userNameSchema = new Schema<userName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userNameSchema,
  email: { type: String, required: true },
  DOB: { type: String },
  number: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  gender: ['male', 'female'],
  bloodgroup: ['A+', 'A-', 'AB ', 'B+ ', 'B- ', 'AB+ ', 'AB- ', ' O+', 'O-'],
  avatar: { type: String, required: true },
  isActive: ['active', 'inactive'],
});

export const studentModel = model<Student>('student', studentSchema);
