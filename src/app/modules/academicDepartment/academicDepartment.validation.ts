import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "academic department name must be string",
      required_error: "academic department required",
    }),
    academicFaculty: z.string({
      invalid_type_error: "academic faculty ID must be string",
      required_error: "academic department required",
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "academic department name must be string",
        required_error: "academic department required",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "academic faculty ID must be string",
        required_error: "academic department required",
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
