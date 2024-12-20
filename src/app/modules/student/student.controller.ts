import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import { sendResponse } from "../../utils/send-response";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Get all Students successfully",
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

    sendResponse(res, {
      statusCode: 200,
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

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student is deleted successfully",
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
