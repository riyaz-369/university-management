import { z } from "zod";

// UserName Schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required" })
    .max(20, { message: "First name can't be more than 20 characters" })
    .refine((value) => /^[A-Z]/.test(value), {
      message: "First name must start with a capital letter",
    }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
});

// Guardian Schema
const guardianSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required" }),
});

// LocalGuardian Schema
const localGuardianSchema = z.object({
  name: z.string().min(1, { message: "Local guardian's name is required" }),
  occupation: z
    .string()
    .min(1, { message: "Local guardian's occupation is required" }),
  contactNo: z
    .string()
    .min(1, { message: "Local guardian's contact number is required" }),
  address: z
    .string()
    .min(1, { message: "Local guardian's address is required" }),
});

// Main Student Schema
const studentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(6, { message: "Password is required" }),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(["male", "female", "other"], {
        message: "Gender is required",
      }),
      dateOfBirth: z.string(),
      email: z.string().email({ message: "Valid email is required" }),
      contactNo: z.string().min(1, { message: "Contact number is required" }),
      emergencyContactNo: z
        .string()
        .min(1, { message: "Emergency contact number is required" }),
      bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
      presentAddress: z
        .string()
        .min(1, { message: "Present address is required" }),
      permanentAddress: z
        .string()
        .min(1, { message: "Permanent address is required" }),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  studentValidationSchema,
};
