import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { studentRoute } from "../modules/student/student.route";

const router = Router();

const moduleRoutes = [
  { path: "/users", route: userRoute },
  { path: "/students", route: studentRoute },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
