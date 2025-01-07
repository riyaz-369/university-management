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

export const AcademicSemesterValidations = {
  CreateAcademicSemesterValidationSchema,
};
