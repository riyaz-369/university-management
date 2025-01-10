import { z } from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";
import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonth,
} from "./academicSemester.interface";

const CreateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [TAcademicSemesterName]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [TAcademicSemesterCode]),
    startMonth: z.enum([...Months] as [TMonth]),
    endMonth: z.enum([...Months] as [TMonth]),
  }),
});

const UpdateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...AcademicSemesterName] as [TAcademicSemesterName])
      .optional(),
    year: z.string().optional(),
    code: z
      .enum([...AcademicSemesterCode] as [TAcademicSemesterCode])
      .optional(),
    startMonth: z.enum([...Months] as [TMonth]).optional(),
    endMonth: z.enum([...Months] as [TMonth]).optional(),
  }),
});

export const AcademicSemesterValidations = {
  CreateAcademicSemesterValidationSchema,
  UpdateAcademicSemesterValidationSchema,
};
