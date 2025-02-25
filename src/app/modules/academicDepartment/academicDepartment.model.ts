import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import AppError from "../../errors/app-error";

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

AcademicDepartmentSchema.pre("save", async function (next) {
  const isExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isExist) {
    throw new AppError(404, "Academic Department already exist");
  }
  next();
});

AcademicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne({
    query,
  });
  if (!isDepartmentExist) {
    throw new AppError(404, "Academic Department does not exist");
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  AcademicDepartmentSchema
);
