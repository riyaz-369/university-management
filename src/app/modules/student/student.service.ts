import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentInToDB = async (studentData: TStudent) => {
  // created custom statics
  const existingStudent = await Student.isUserExists(studentData.id);

  if (existingStudent) {
    throw new Error("Student already exist");
  }

  const result = await Student.create(studentData); // built in static method
  return result;
  // const student = new Student(studentData); // created instance

  // created custom instance
  // const existingStudent = await student.isUserExists(studentData.id);
  // if (existingStudent) {
  //   throw new Error("Student already exist");
  // }

  // const result = await student.save(); // built in instance method
  // return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getAStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};

const deleteAStudentFromBD = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentInToDB,
  getAllStudentsFromDB,
  getAStudentFromDB,
  deleteAStudentFromBD,
};
