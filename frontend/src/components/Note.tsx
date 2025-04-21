import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/notes";
import { formatDate } from "../utils/formatDate";
import * as MdIcons from "react-icons/md";

interface NoteProps {
  note: NoteModel;
  className?:string
}
const Note = ({ note ,className}: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText:string
  if(updatedAt>createdAt){
    createdUpdatedText = "Updated: " + formatDate(updatedAt)
  }else{
    createdUpdatedText = "Created :" + formatDate(createdAt)
  }

  return (
    <Card className={`${styles.noteCard} ${className}`}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title} <MdIcons.MdDelete className="text-muted" /></Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
       
      </Card.Body>
      <Card.Footer className="text-muted">
          {createdUpdatedText}
        </Card.Footer>
    </Card>
  );
};

export default Note;
