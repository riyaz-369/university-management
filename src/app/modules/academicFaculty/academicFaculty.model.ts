import { Schema, model } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const AcademicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicFaculty = model<TAcademicFaculty>(
  "AcademicFaculty",
  AcademicFacultySchema
);
