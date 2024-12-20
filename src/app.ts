/* eslint-disable @typescript-eslint/ban-ts-comment */
import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import globalErrorHandler from "./app/middlewares/global-err-handler";
import { notFound } from "./app/middlewares/not-found";
import router from "./app/routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("University running on port " + config.port);
});

// @ts-ignore
app.use(globalErrorHandler);

// @ts-ignore
app.use(notFound);

export default app;
