import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getAAcademicFacultyFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await AcademicFaculty.findOne({ id });
  return result;
};

const updateAAcademicFacultyFromBD = async (
  id: string,
  payload: TAcademicFaculty
) => {
  const result = await AcademicFaculty.updateOne({ id }, { ...payload });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicFacultyFromDB,
  getAAcademicFacultyFromDB,
  updateAAcademicFacultyFromBD,
};
