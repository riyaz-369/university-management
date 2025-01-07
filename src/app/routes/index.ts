import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { studentRoute } from "../modules/student/student.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";

const router = Router();

const moduleRoutes = [
  { path: "/users", route: userRoute },
  { path: "/students", route: studentRoute },
  { path: "/academic-semester", route: AcademicSemesterRoutes },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
