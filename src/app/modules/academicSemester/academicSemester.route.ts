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
// router.get("/", studentController.getAllStudents);
// router.get("/:id", studentController.getAStudent);
// router.delete("/:id", studentController.deleteAStudent);

export const AcademicSemesterRoutes = router;
