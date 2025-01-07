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

export const AcademicSemesterController = {
  CreateAcademicSemester,
};
