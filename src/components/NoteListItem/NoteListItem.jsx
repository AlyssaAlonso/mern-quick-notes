export default function NoteListItem({ note }) {
  return (
    <div>
      <h3>{note.text}</h3>
      <p>Created: {new Date(note.updatedAt).toLocaleString()}</p>
    </div>
  );
}
