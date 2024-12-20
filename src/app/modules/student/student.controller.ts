import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student is retrieve successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getAStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Get a Student successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await studentServices.deleteAStudentFromBD(id);
    res.status(200).json({
      success: true,
      message: "Delete a Student successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudents,
  getAStudent,
  deleteAStudent,
};
