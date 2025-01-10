import { sendResponse } from "../../utils/send-response";
import { catchAsync } from "../../utils/catch-async";
import { AcademicSemesterServices } from "./academicSemester.service";

const CreateAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.CreateAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic semester is created successfully",
    data: result,
  });
});

const GetAllSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.GetAllSemesterFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieved all semester successfully !",
    data: result,
  });
});

const GetASemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AcademicSemesterServices.GetASemesterFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve a semester successfully !",
    data: result,
  });
});

const UpdateASemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = await req.body;
  const result = await AcademicSemesterServices.UpdateASemesterFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Update a semester successfully !",
    data: result,
  });
});

export const AcademicSemesterController = {
  CreateAcademicSemester,
  GetAllSemester,
  GetASemester,
  UpdateASemester,
};
