import { z } from "zod";

const AcademicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "name must be string",
    })
    .min(2, { message: "Min 2 character required" })
    .max(20, { message: "name can not be more than 20 characters" }),
});

export const AcademicFacultyValidations = {
  AcademicFacultyValidationSchema,
};
