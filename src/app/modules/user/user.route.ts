import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidations } from "../student/student.validation";

const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      // validation logic here
      next();
    } catch (error) {
      next(error);
    }
  };
};

router.post(
  "/create-student",
  validateRequest(studentValidations.studentValidationSchema),
  UserController.createStudent
);

export const userRoute = router;
