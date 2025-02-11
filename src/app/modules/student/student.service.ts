import mongoose from "mongoose";
import { Student } from "./student.model";
import AppError from "../../errors/app-error";
import { User } from "../user/user.model";

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: { path: "academicFaculty" },
    });

  return result;
};

const getAStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.findOne({ id })
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: { path: "academicFaculty" },
    });
  return result;
};

const deleteAStudentFromBD = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedStudent) {
      throw new AppError(400, "Failed to delete student");
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedUser) {
      throw new AppError(400, "Failed to delete user");
    }

    session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    await session.endSession();
  }
};

export const studentServices = {
  getAllStudentsFromDB,
  getAStudentFromDB,
  deleteAStudentFromBD,
};
