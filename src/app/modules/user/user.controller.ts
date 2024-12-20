import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/send-response";
import { catchAsync } from "../../utils/catch-async";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
};
