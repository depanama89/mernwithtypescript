import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/notes";

interface NoteProps {
  note: NoteModel;
}
const Note = ({ note }: NoteProps) => {
  const { title, text, createAt, updateAt } = note;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
