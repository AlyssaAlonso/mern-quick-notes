import { useState } from "react";
import "./NewNoteForm.css";

export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState({
    text: "",
  });

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({ text: "" });
  }

  return (
    <>
      <div class="flex-ctr-ctr">
        <form class="NewNoteForm" onSubmit={handleAddNote}>
          <textarea
            placeholder="Type your note..."
            value={newNote.text}
            name="text"
            onChange={(evt) =>
              setNewNote({ ...newNote, text: evt.target.value })
            }
            required
          />
          <button type="submit">ADD NOTE</button>
        </form>
      </div>
    </>
  );
}
