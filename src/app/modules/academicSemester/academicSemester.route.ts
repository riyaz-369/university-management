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
router.get("/:id", AcademicSemesterController.GetASemester);
router.patch("/:id", AcademicSemesterController.UpdateASemester);

export const AcademicSemesterRoutes = router;
