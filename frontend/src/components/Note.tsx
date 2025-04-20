import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/notes";
import { formatDate } from "../utils/formatDate";
// import * as MdIcons from "react-icons/md";
import { Trash2 } from "lucide-react";

interface NoteProps {
  note: NoteModel;
  onDeleteNotesClicked: (note: NoteModel) => void;
  className?: string;
}
const Note = ({ note, onDeleteNotesClicked, className }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated: " + formatDate(updatedAt);
  } else {
    createdUpdatedText = "Created :" + formatDate(createdAt);
  }

  return (
    // <MdIcons.MdDelete className="text-muted" />
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>
          {title}{" "}
          <Trash2
            size={20}
            onClick={(e) => {
              onDeleteNotesClicked(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Note;
