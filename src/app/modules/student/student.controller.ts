import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await studentServices.createStudentInToDB(student);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
  }
};

export const studentController = {
  createStudent,
};
