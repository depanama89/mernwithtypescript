import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import NoteModel from "./models/note";
import notesRoutes from "./routes/routes";

const app = express();
// const port = 5000;

app.use("/api/notes", notesRoutes);
app.use("/", async (req, res, next) => {
  try {
    // throw Error("Bazinga!");
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
