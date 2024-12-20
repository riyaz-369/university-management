import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";
import { sendResponse } from "../../utils/send-response";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get all Students successfully",
    data: result,
  });
});

const getAStudent: RequestHandler = async (req, res, next) => {
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

const deleteAStudent: RequestHandler = async (req, res, next) => {
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
