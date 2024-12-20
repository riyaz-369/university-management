import { studentServices } from "./student.service";
import { sendResponse } from "../../utils/send-response";
import { catchAsync } from "../../utils/catch-async";

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get all Students successfully",
    data: result,
  });
});

const getAStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.getAStudentFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get a Student successfully",
    data: result,
  });
});

const deleteAStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.deleteAStudentFromBD(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student is deleted successfully",
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getAStudent,
  deleteAStudent,
};
