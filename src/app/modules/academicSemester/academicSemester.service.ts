import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const CreateAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code !");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const GetAllSemesterFromDB = async () => {
  const result = await AcademicSemester.find({});
  return result;
};

const GetASemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findOne({
    _id: id,
  });
  return result;
};

const UpdateASemesterFromDB = async (
  id: string,
  payload: TAcademicSemester
) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code !");
  }

  const result = await AcademicSemester.updateOne(
    {
      _id: id,
    },
    { ...payload }
  );
  return result;
};

export const AcademicSemesterServices = {
  CreateAcademicSemesterIntoDB,
  GetAllSemesterFromDB,
  GetASemesterFromDB,
  UpdateASemesterFromDB,
};
