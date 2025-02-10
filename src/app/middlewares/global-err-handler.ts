/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Something went wrong!",
    error: error,
  });
};

export default globalErrorHandler;
