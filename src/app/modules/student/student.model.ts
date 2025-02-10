import { model, Schema } from "mongoose";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true, // remove empty space
    maxlength: [20, "First name can't be more than 20 charters"],
    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE} is not in capitalize format",
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, "Last name is required"] },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

// student model
const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "Student ID is required"],
    ref: "User",
  },
  name: {
    type: userNameSchema,
    required: [true, "Name details are required"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String, required: [true, "Date of birth is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  contactNo: { type: String, required: [true, "Contact number is required"] },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian details are required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian details are required"],
  },
  profileImg: String,
  admissionSemester: { type: Schema.ObjectId, ref: "AcademicSemester" },
  academicDepartment: { type: Schema.ObjectId, ref: "AcademicDepartment" },
  isActive: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

studentSchema.pre("aggregate", async function (next) {
  // console.log(this.pipeline()); // [ { '$match': { id: '12346' } } ]

  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// custom statics method------------------>
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
