import { Request, Response } from "express";
import { studentServices } from "./student.service";

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student is retrieve successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: (error as Error)?.message || "something went wrong",
      data: error,
    });
  }
};

const getAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getAStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Get a Student successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error)?.message || "Something went wrong",
      data: error,
    });
  }
};

const deleteAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentServices.deleteAStudentFromBD(id);
    res.status(200).json({
      success: true,
      message: "Delete a Student successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error)?.message || "Something went wrong",
      data: error,
    });
  }
};

export const studentController = {
  getAllStudents,
  getAStudent,
  deleteAStudent,
};
