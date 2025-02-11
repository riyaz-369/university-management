import express from "express";
import { studentController } from "./student.controller";
import validateRequest from "../../middlewares/validate-request";
import { studentValidations } from "./student.validation";

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getAStudent);
router.patch(
  "/:id",
  validateRequest(studentValidations.updateStudentValidationSchema),
  studentController.updateAStudent
);
router.delete("/:id", studentController.deleteAStudent);

export const studentRoute = router;
