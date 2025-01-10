import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log("req data from middleware:", req.body);
    try {
      // validation check
      //if everything all right next() ->
      const check = await schema.parseAsync({
        body: req.body,
      });
      console.log("checked schema:", check);
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
