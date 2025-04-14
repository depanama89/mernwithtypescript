import { RequestHandler } from "express";
import NoteModel from "../models/note";
import createHttpError from "http-errors";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.id;
  try {
    const note = await NoteModel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "note not found");
    }
    res.status(200).send(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    if (!title) {
      throw createHttpError(400, "Note must have a title");
    }
    const newNote = await NoteModel.create({
      title: title,
      text: text,
    });

    res.status(201).send(newNote);
  } catch (error) {
    next(error);
  }
};
