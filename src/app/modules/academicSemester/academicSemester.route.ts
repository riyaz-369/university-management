import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../middlewares/validate-request";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-semester",
  validateRequest(
    AcademicSemesterValidations.CreateAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.CreateAcademicSemester
);

router.get("/", AcademicSemesterController.GetAllSemester);
router.get("/:semesterId", AcademicSemesterController.GetASemester);
router.patch(
  "/:semesterId",
  validateRequest(
    AcademicSemesterValidations.UpdateAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.UpdateASemester
);

export const AcademicSemesterRoutes = router;
