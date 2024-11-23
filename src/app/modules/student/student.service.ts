import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentInToDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(studentData); // built in static method
  const student = new Student(studentData); // created instance

  const existingStudent = await student.isUserExists(studentData.id);
  if (existingStudent) {
    throw new Error("Student already exist");
  }

  const result = await student.save(); // built in instance method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getAStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentInToDB,
  getAllStudentsFromDB,
  getAStudentFromDB,
};
