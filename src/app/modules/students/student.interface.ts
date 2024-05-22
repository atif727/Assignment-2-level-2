import { Schema, model, connect } from 'mongoose';

// hudai :)

export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: userName;
  gender: 'male' | 'female';
  DOB: string;
  number: string;
  email: string;
  avatar?: string;
  emergencyContactNo: string;
  presentAddress: string;
  profileImg?: string;
  isActive: 'active' | 'inactive';
  bloodgroup:
    | 'A+'
    | 'A-'
    | 'AB '
    | 'B+ '
    | 'B- '
    | 'AB+ '
    | 'AB- '
    | ' O+'
    | 'O-';
};

export default Student;
