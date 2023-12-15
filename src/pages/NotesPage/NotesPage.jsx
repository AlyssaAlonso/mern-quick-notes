import { useState, useEffect } from "react";
import * as notesAPI from "../../utilities/notes-api";
import NoteList from "../../components/NoteList/NoteList";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({ user, setUser }) {
  const [notes, setNotes] = useState([]);

  async function addNote(note) {
    try {
      const newNote = await notesAPI.create(note);

      setNotes((prevNotes) => {
        return [newNote, ...prevNotes];
      });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  useEffect(function () {
    async function getNotes() {
      try {
        const notes = await notesAPI.getAllForUser();
        setNotes(notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
    getNotes();
  }, []);

  return (
    <>
      <h1>Notes Page</h1>
      <NewNoteForm notes={notes} setNotes={setNotes} addNote={addNote} />
      <h2>My Notes:</h2>
      {notes.length ? (
        <NoteList notes={notes} setNotes={setNotes} />
      ) : (
        <h3>No Notes Yet!</h3>
      )}
    </>
  );
}
