import { RequestHandler } from "express";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/send-response";

const createStudent: RequestHandler = async (req, res, next) => {
  const { password, student: studentData } = req.body;

  try {
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
