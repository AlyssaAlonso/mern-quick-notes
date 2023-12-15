import NoteListItem from "../NoteListItem/NoteListItem";

export default function NoteList({ notes }) {
  return (
    <main>
      {notes.map((note) => (
        <NoteListItem note={note} key={note._id} />
      ))}
    </main>
  );
}
