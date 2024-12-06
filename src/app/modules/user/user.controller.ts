import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  const { password, student } = req.body;

  try {
    const result = await UserServices.createStudentIntoDB(password, student);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: true,
      message: (err as Error)?.message || "something went wrong",
      data: err,
    });
  }
};

export const UserController = {
  createStudent,
};
