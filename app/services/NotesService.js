import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";


class NotesService {

    setActiveNote(noteId) {
        console.log(noteId);
    }


    createNote(noteData) {
        const newNote = new Note(noteData)
        AppState.notes.push(newNote)
        AppState.emit('notes')
    }
}


export const notesService = new NotesService