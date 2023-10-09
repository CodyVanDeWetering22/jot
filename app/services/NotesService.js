import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js";


class NotesService {

    setActiveNote(noteId) {
        console.log(noteId);
    }


    createNote(eventData) {
        const newnote = new Note(eventData)
        AppState.notes.push(newnote)
        AppState.emit('notes')
    }
}


export const notesService = new NotesService