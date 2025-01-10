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

const GetASemesterFromDB = async (semesterId: string) => {
  const result = await AcademicSemester.findOne({
    _id: semesterId,
  });
  return result;
};

const UpdateASemesterFromDB = async (
  semesterId: string,
  payload: TAcademicSemester
) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid semester code !");
  }

  const result = await AcademicSemester.updateOne(
    {
      _id: semesterId,
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
