import express from "express";
import validateRequest from "../../middlewares/validate-request";
import { AcademicFacultyValidations } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidationSchema
  ),
  AcademicFacultyController.createAcademicFaculty
);

router.get("/", AcademicFacultyController.getAllAcademicFaculty);
router.get("/:facultyId", AcademicFacultyController.getAAcademicFaculty);

router.patch(
  "/:facultyId",
  validateRequest(
    AcademicFacultyValidations.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyController.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
