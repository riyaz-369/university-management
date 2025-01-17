import { sendResponse } from "../../utils/send-response";
import { catchAsync } from "../../utils/catch-async";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic faculty is created successfully",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieved all academic faculty successfully !",
    data: result,
  });
});

const getAAcademicFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.semesterId;
  const result = await AcademicFacultyServices.getAAcademicFacultyFromDB(
    facultyId
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve a academic faculty successfully !",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const semesterId = req.params.semesterId;
  const data = await req.body;
  const result = await AcademicFacultyServices.updateAAcademicFacultyFromBD(
    semesterId,
    data
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Update a academic faculty successfully !",
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAAcademicFaculty,
  updateAcademicFaculty,
};
