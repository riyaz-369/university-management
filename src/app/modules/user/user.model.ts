import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// pre save middleware/hook
userSchema.pre("save", async function (next) {
  // console.log(this, "pre hook: we will save data");
  const hashedPassword = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt)
  );
  this.password = hashedPassword;
  next();
});

// send res data empty password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Query middleware
userSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const User = model<TUser>("User", userSchema);
