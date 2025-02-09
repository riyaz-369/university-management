import { sendResponse } from "../../utils/send-response";
import { catchAsync } from "../../utils/catch-async";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Department is created successfully",
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieved all academic department successfully !",
    data: result,
  });
});

const getAAcademicDepartment = catchAsync(async (req, res) => {
  const departmentId = req.params.departmentId;
  const result = await AcademicDepartmentServices.getAAcademicDepartmentFromDB(
    departmentId
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve a academic department successfully !",
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const departmentId = req.params.departmentId;
  const data = await req.body;
  const result =
    await AcademicDepartmentServices.updateAAcademicDepartmentFromBD(
      departmentId,
      data
    );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Update a academic department successfully !",
    data: result,
  });
});

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getAAcademicDepartment,
  updateAcademicDepartment,
};
